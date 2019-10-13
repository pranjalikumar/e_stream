import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "jumpstate";
import * as FirebaseUtils from "../Services/Firebase";
import firebase from "firebase";
import * as firebaseui from 'firebaseui';
import { browserHistory } from "react-router";
// Binding the state and actions. These will be available as props to component
class Index extends Component {
  constructor(props) {
    super(props);
    FirebaseUtils.initializeFirebase();
    this.state = {
      value: ""
    };
  }
  onSuccess = () =>{
    browserHistory.push("/form");
  }
  componentDidMount(){
    if(firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', {
        signInSuccessUrl: '/form',
        signInFlow: 'popup',
        signInOptions: [
      // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    // Other config options...
    });
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', {
        signInSuccessUrl: '/form',
        signInFlow: 'popup',
        signInOptions: [
      // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    // Other config options...
    });
    }
  }
  render() {
    return(
      <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    coach: state.coach
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
