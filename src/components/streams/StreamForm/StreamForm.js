import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <p>{error}</p>
        </div>
      );
    }
  }

  renderInput = ({ input, label, className, meta }) => {
    return (
      <div className={`field ${meta.error ? "error" : ""}`}>
        <p>{label}</p>
        <input type="text" {...input} className={className} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    //this.props.onSubmit;
    //pass down the specific action creator to call from the component
    /*
    formValues.title = "";
    formValues.description = "";
    */
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        autoComplete="off"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
          className="title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
          className="description"
        />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "StreamForm",
  validate: validate,
  enableReinitialize: true,
})(StreamForm);
