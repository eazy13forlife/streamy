import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal.js";
import "./StreamDelete.css";
import history from "../../../history.js";
import { connect } from "react-redux";
import { deleteStream, fetchStream, fetchStreams } from "../../../actions";
import StreamList from "../StreamList/StreamList.js";
import { closeStreamDelete } from "../../../actions/";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }
  renderActions = () => {
    return (
      <div className="buttons">
        <button
          onClick={async () => {
            await this.props.deleteStream(this.props.id);
            this.props.closeStreamDelete();
            this.props.fetchStreams();
          }}
        >
          Delete
        </button>

        <button onClick={this.props.closeStreamDelete}>Cancel</button>
      </div>
    );
  };

  renderModalContent() {
    if (!this.props.stream) {
      return "";
    }

    return this.props.stream.title;
  }
  render() {
    return (
      <div className="StreamDelete">
        <Modal
          header="Delete Stream"
          content={`Are you sure you want to delete "${this.renderModalContent()}"`}
          actions={this.renderActions}
          onDismiss={() => {
            this.props.closeStreamDelete();
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.id],
  };
};
export default connect(mapStateToProps, {
  deleteStream: deleteStream,
  fetchStream: fetchStream,
  fetchStreams: fetchStreams,
  closeStreamDelete,
})(StreamDelete);
