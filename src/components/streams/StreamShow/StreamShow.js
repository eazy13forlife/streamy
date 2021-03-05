import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../../actions/";
import "./StreamShow.css";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);

    this.buildPlayer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stream !== this.props.stream) {
      this.buildPlayer();
    }
  }
  buildPlayer() {
    // if the player exists already, we dont need to create it, so just returnn nothing. Also, if the stream doesn't exist, we will just just return nothing, since if we create it, we wont have a this.videoRef since <p>Loading </p>(which has no this.videoRef) returns if our stream does not exist.
    if (this.flvPlayer || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  render() {
    if (!this.props.stream) {
      return <p>Loading...</p>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="stream-show">
        <video ref={this.videoRef} controls />

        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
