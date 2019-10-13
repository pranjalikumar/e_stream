import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "jumpstate";
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import AppBar from "material-ui/AppBar";
import DropDownMenu from 'material-ui/DropDownMenu';
import "./scss/form.scss";
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from "react-router";
import { orange500, blue500 } from "material-ui/styles/colors";
import * as firebase from 'firebase';


  // Get a reference to the database service
var database = firebase.database();
// Binding the state and actions. These will be available as props to component
const styles = {
  underlineStyle: {
    borderColor: "#7f8c8d",
  },
};
const customContentStyle = {
  width: "35%",
  maxWidth: "none"
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      obj: {
        name:"",
        phone:"",
        trainingCourse:"",
        comments:"",
        satisfaction:"",
        reasons:""
      }
    };
  }
  handleChange = (event, index, value) => {
    this.setState({value});
    this.setState({
      obj: {
    ...this.state.obj,
    satisfaction: value
  }
    })
  }
  showSurvey=(e)=>{
    browserHistory.push("/results");
  }
  submitForm = (e)=>{

  console.log(this.state.obj)
  e.preventDefault();
  const itemsRef = firebase.database().ref('items');
  const item = this.state.obj
  itemsRef.push(item);
  this.setState({
    obj: {
      name:"",
      phone:"",
      trainingCourse:"",
      comments:"",
      satisfaction:"",
      reasons:""
    }
  });
  }
  reasons=(event,index,value)=>{
    this.setState({
      obj: {
    ...this.state.obj,
    reasons: event.target.value
  }
    })
  }
  comments=(event,index,value)=>{
    this.setState({
      obj: {
    ...this.state.obj,
    comments: event.target.value
  }
    })
  }
  name=(event,index,value)=>{
    this.setState({
      obj: {
    ...this.state.obj,
    name: event.target.value
  }
    })
  }
  phone=(event,index,value)=>{
    this.setState({
      obj: {
    ...this.state.obj,
    phone: event.target.value
  }
    })
  }
  tg=(event,index,value)=>{
    this.setState({
      obj: {
    ...this.state.obj,
    trainingCourse: event.target.value
  }
    })
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
        <h1 >Take Survey</h1>
      </div>
      <div className='form_body'>
      <TextField
        hintText="Name"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
        onChange={this.name}
      />
      <br />
      <TextField
        hintText="Training Course"
        hintStyle={styles.errorStyle}
        errorText="Pg/Ug/Others"
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
        onChange={this.tg}
      />
      <br/>
      <SelectField
          floatingLabelText="Training Satisfaction?"
          onChange={this.handleChange}
          value={this.state.value}
          underlineStyle={styles.selectfield}
          autoWidth={false}
          fullWidth={true}
        >
          <MenuItem value={1} primaryText="Very unsatisfied" />
          <MenuItem value={2} primaryText="Unsatisfied" />
          <MenuItem value={3} primaryText="Neutral" />
          <MenuItem value={4} primaryText="Satisfied" />
          <MenuItem value={5} primaryText="Very satisfied" />
        </SelectField>
      <br />
      <TextField
        hintText="For what reasons did you attend this training?"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
        onChange={this.reasons}
      />
      <br />
      <TextField
        hintText="Comments"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        onChange={this.comments}
        fullWidth={true}
      />
      <br />


      <TextField
        hintText="Phone Number"
        hintStyle={styles.errorStyle}
        underlineStyle={styles.underlineStyle}
        fullWidth={true}
        onChange={this.phone}
      />
      <br />
      <RaisedButton label="Submit" primary={true} onClick={this.submitForm}/>
      <RaisedButton label="Show Survey" secondary={true} onClick={this.showSurvey}/>
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
