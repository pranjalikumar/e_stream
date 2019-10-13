import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "jumpstate";
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import AppBar from "material-ui/AppBar";
import "./scss/form.scss";
import { orange500, blue500 } from "material-ui/styles/colors";
// Binding the state and actions. These will be available as props to component
const styles = {
  underlineStyle: {
    borderColor: "#7f8c8d"
  }
};
const customContentStyle = {
  width: "35%",
  maxWidth: "none"
};
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {

  return(
    <div class="container">
    <AppBar
      title="Survey App"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{ backgroundColor: "#EA2027" }}
    />
    <div className="body">
    <div className='form_outer'>
      <div className='form_header'>
        <h1>Take Survey</h1>
      </div>
      <div className='form_body'>
      <TextField
        hintText="Full Name"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
      />
      <br />
      <TextField
        hintText="BIT Roll Number"
        hintStyle={styles.errorStyle}
        errorText="BE/xxxxx/20xx"
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
      />
      <br />
      <TextField
        hintText="Email ID"
        hintStyle={styles.errorStyle}
        //errorText="This field is required"
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
      />
      <br />
      <TextField
        hintText="Username"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
      />
      <br />
      <TextField
        hintText="Password"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        type="password"
        fullWidth={true}
      />
      <br />
      <TextField
        hintText="Confirm Password"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        type="password"
        fullWidth={true}
      />
      <br />
      <TextField
        hintText="Phone Number"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
      />
      <br />
      </div>
    </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form)
