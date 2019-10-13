import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "jumpstate";
import * as firebase from 'firebase';
import "./scss/result.scss";
import AppBar from "material-ui/AppBar";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// Binding the state and actions. These will be available as props to component

  // Get a reference to the database service
class User extends Component{
  render(){
    const issues= this.props.user;
    return(
      <TableRow >
        <TableRowColumn>{issues.name}</TableRowColumn>
        <TableRowColumn>{issues.phone}</TableRowColumn>
        <TableRowColumn>{issues.trainingCourse}</TableRowColumn>
        <TableRowColumn>{issues.satisfaction}</TableRowColumn>
        <TableRowColumn>{issues.reasons}</TableRowColumn>
        <TableRowColumn>{issues.comments}</TableRowColumn>

      </TableRow>
    )
  }
}
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      person: [],
      isLoading: true
    };
  }

  componentWillMount(){

    const personDB = firebase.database().ref('items');
    console.log(personDB)
    const tempPeopleList = [];
      personDB.on('value',snapshot => {
        //Read each item in shoppings
        //Store it in a temporary array
        snapshot.forEach(childSnapShot => {
          //childSnapShot.key is the name of the data
          //childSnapShot.val() is the value of the data
          tempPeopleList.push(childSnapShot.val());

        });
        this.setState({person: tempPeopleList, isLoading: false });
  });
}
  render() {
    const rows = this.state.person.map(item=><User key = {item.id} user= {item} />)
    return(
      <div>
      <AppBar
        title="Results of Survey"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={{ backgroundColor: "#EA2027" }}
      />
      <div className='body'>

        <Table>
        <TableHeader>
          <TableRow striped="true">
            <TableHeaderColumn tooltip="Full Name">Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="Phone Number">Phone</TableHeaderColumn>
            <TableHeaderColumn tooltip="Course-Ug/Pg/Others">Training Course</TableHeaderColumn>
            <TableHeaderColumn tooltip="Satisfaction Level">Satisfaction</TableHeaderColumn>
            <TableHeaderColumn tooltip="Reason for Attending Training">Reason</TableHeaderColumn>
            <TableHeaderColumn tooltip="Comments about Training">Comments</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody stripedRows="true">{rows}</TableBody>
      </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Results)
