import React from "react";
import ReactDOM from "react-dom";
import MyComponent from './MyComponent'
import TimerTrigger from './Frontend/Components/TimerTrigger/TimerTrigger'

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button>My Button</Button>
//       </div>
//     )
//   }
// }

const App = () => {
  return (
    <div className="App">
      <h1>My title</h1>
      <h4>Another one</h4>
      <MyComponent></MyComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));