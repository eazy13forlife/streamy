import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../../actions/";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <p>Loading...</p>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="stream-show">
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
