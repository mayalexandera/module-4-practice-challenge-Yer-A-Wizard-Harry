import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {
  
  return (  
  <div className="WizardList">Yer not a wizard yet, Harry
    {props.students.map((student,index)=> <Wizard key={index} name={student.name} house={student.house}/>)}
  </div>);
};

export default WizardList;
