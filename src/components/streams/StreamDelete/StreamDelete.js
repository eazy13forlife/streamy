import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal.js";
import "./StreamDelete.css";
import history from "../../../history.js";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../../actions";
import StreamList from "../StreamList/StreamList.js";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }
  renderActions = () => {
    return (
      <div className="buttons">
        <button
          onClick={() => {
            this.props.deleteStream(this.props.match.params.id);
          }}
        >
          Delete
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
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
        <div>StreamDelete</div>
        <Modal
          header="Delete Stream"
          content={`Are you sure you want to delete "${this.renderModalContent()}"`}
          actions={this.renderActions}
          onDismiss={() => {
            history.push("/");
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, {
  deleteStream: deleteStream,
  fetchStream: fetchStream,
})(StreamDelete);
