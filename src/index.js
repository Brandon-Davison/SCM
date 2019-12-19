import React from "react";
import ReactDOM from "react-dom";
import TimerTrigger from './Frontend/Components/TimerTrigger/TimerTrigger'
import UserSurvey from './Frontend/Components/UserSurvey/UserSurvey'
import WebsiteModal from './Frontend/Components/WebsiteModal/WebsiteModal'

let surveyID = "not found"

const foo = () => {
  if (document.getElementById("embedID")) {
    surveyID = document.getElementById("embedID").getAttribute("data-name");
  }  
}
foo()

const App = () => {
  return (
    <div className="App">
    <TimerTrigger timerLength={2} id={surveyID}></TimerTrigger>

    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));