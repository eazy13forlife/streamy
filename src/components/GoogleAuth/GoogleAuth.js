import React from "react";
import clientId from "../../clientId.js";
import "./GoogleAuth.css";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);

    this.configureButton = {
      signIn: {
        text: "Sign in with Google",
        iconClass: "position google large icon",
        onClick: this.onSignInClick,
      },
      signOut: {
        text: "Sign Out",
        iconClass: "",
        onClick: this.onSignOutClick,
      },
    };
  }

  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          clientId: clientId,
          scope: "email",
        })
        .then(() => {
          this.authObject = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.authObject.isSignedIn.get());
          this.authObject.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (boolean) => {
    if (boolean) {
      this.props.signIn(this.authObject.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.authorized === null) {
      return "";
    }

    const signInStatus = this.props.authorized
      ? this.configureButton["signOut"]
      : this.configureButton["signIn"];

    const { text, iconClass, onClick } = signInStatus;

    return (
      <button onClick={onClick}>
        <i className={iconClass}></i>
        {text}
      </button>
    );
    /*
    if (this.state.signedIn === null) {
      return "";
    } else if (this.state.signedIn === true) {
      return (
        <button className="sign-out" onClick={this.onButtonClick}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="sign-in" onClick={this.onButtonClick}>
          <i className="position google large icon"></i>
          Sign In with Google
        </button>
      );
    }
    */
  }
  onSignInClick = () => {
    this.authObject.signIn();
  };
  onSignOutClick = () => {
    this.authObject.signOut();
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorization.authorized,
  };
};
export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(
  GoogleAuth
);
