import React from "react";
import ReactDOM from "react-dom";
import MyComponent from './MyComponent'
import TimerTrigger from './Frontend/Components/TimerTrigger/TimerTrigger'
import UserSurvey from './Frontend/Components/UserSurvey/UserSurvey'
import WebsiteModal from './Frontend/Components/WebsiteModal/WebsiteModal'

const App = () => {
  return (
    <div className="App">
      <h1>My title</h1>
      <h4>Another one</h4>
      <MyComponent></MyComponent>
      <WebsiteModal></WebsiteModal>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));