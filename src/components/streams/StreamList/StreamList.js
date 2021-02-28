import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../../actions";
import "./StreamList.css";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderDeleteAndEdit(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="admin">
          <Link to={`/streams/edit/${stream.id}`}>
            <button className="edit">Edit</button>
          </Link>
          <Link to={`/streams/delete/${stream.id}`}>
            <button className="delete">Delete</button>
          </Link>
        </div>
      );
    }
  }

  renderStreams() {
    return this.props.streams.map((stream) => {
      return (
        <div className="stream" key={stream.id}>
          <div className="info">
            <h3>{stream.title}</h3>
            <p>{stream.description}</p>
          </div>
          {this.renderDeleteAndEdit(stream)}
        </div>
      );
    });
  }
  renderCreateButton() {
    if (this.props.authorized) {
      return (
        <div className="create-button">
          <Link to="/streams/new">
            <input type="submit" value="Create Stream" />
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="streams">
        <h2>Streams</h2>
        {this.renderStreams()}
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorization.authorized,
    currentUserId: state.authorization.userId,
    streams: Object.values(state.streams),
  };
};
export default connect(mapStateToProps, { fetchStreams: fetchStreams })(
  StreamList
);
