import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../../actions";
import StreamForm from "../StreamForm/StreamForm.js";

class StreamCreate extends React.Component {
  render() {
    return (
      <div className="stream-create">
        <h2>Create a stream</h2>
        <StreamForm onSubmit={this.props.createStream} />
      </div>
    );
  }
}

export default connect(null, { createStream: createStream })(StreamCreate);
