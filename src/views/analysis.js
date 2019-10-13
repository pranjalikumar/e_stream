import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "jumpstate";
// Binding the state and actions. These will be available as props to component
class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return <div> Analysis </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
