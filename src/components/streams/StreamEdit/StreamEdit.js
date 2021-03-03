import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../../actions";
import StreamForm from "../StreamForm/StreamForm.js";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onFormSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.streamObject) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.streamObject;
    return (
      <div className="stream-edit">
        <h2>Edit Stream</h2>
        <StreamForm
          initialValues={
            this.props.streamObject
              ? {
                  title: title,
                  description: description,
                }
              : undefined
          }
          onSubmit={this.onFormSubmit}
          id={this.props.match.params.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streamObject: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchStream: fetchStream,
  editStream: editStream,
})(StreamEdit);
