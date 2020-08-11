import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {

  state = {
    students: [],
    filter: 'All'
  }
  componentDidMount() {
    fetch(`http://hp-api.herokuapp.com/api/characters/students`)
    .then(resp=>resp.json())
    .then(data=> this.setState({students: data}))
  } 
 
  addStudent = ({name, house}) => {
    let newStudent = {name, house}
    this.setState({students: [...this.state.students, newStudent]})
  }

  filterHandler = (e) => {
    this.setState({filter: e.target.value})
  }

  displayStudents = () => {
    let filteredStudents = [...this.state.students]
    return this.state.filter !== 'All' ? 
    filteredStudents.filter(student => student.house === this.state.filter) : filteredStudents
  }
  render() {
    let students = this.displayStudents()
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings addStudent={this.addStudent} filter={this.state.filter} filterHandler={this.filterHandler}/>
        <WizardList students={students}/>
      </div>
    );
  }
}

export default App;
