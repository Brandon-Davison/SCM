import React from "react";
import ReactDOM from "react-dom";
import MyComponent from './MyComponent'
import TimerTrigger from './Frontend/Components/TimerTrigger/TimerTrigger'
import UserSurvey from './Frontend/Components/UserSurvey/UserSurvey'
import WebsiteModal from './Frontend/Components/WebsiteModal/WebsiteModal'

const App = () => {
  return (
    <div className="App">
      <h1>Very basic HTML page</h1>
      <WebsiteModal></WebsiteModal>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));