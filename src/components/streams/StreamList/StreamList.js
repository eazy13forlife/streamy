import React from "react";
import { Link } from "react-router-dom";
import history from "../../../history.js";
import { connect } from "react-redux";
import {
  fetchStreams,
  openStreamDelete,
  closeStreamDelete,
} from "../../../actions";
import "./StreamList.css";
import StreamDelete from "../StreamDelete/StreamDelete.js";

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

          <button
            className="delete"
            onClick={(e) => {
              this.props.openStreamDelete(stream.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    }
  }

  renderStreams() {
    return this.props.streams.map((stream) => {
      return (
        <div className="stream" key={stream.id}>
          <div className="info">
            <Link to={`/streams/show/${stream.id}`}>
              <h3>{stream.title}</h3>
            </Link>
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
  renderStreamDelete() {
    const { open, id } = this.props.streamDelete;
    if (open) {
      return <StreamDelete id={id} />;
    }
    return null;
  }
  render() {
    return (
      <div className="streams">
        <h2>Streams</h2>
        {this.renderStreams()}
        {this.renderCreateButton()}
        {this.renderStreamDelete()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorization.authorized,
    currentUserId: state.authorization.userId,
    streams: Object.values(state.streams),
    streamDelete: state.streamDelete,
  };
};
export default connect(mapStateToProps, {
  fetchStreams: fetchStreams,
  openStreamDelete,
  closeStreamDelete,
})(StreamList);
