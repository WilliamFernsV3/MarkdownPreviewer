import React from "react";
import { Provider as ReduxProvider } from "react-redux";

class Presentational extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>My app</div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Presentational />
    )
  }
}
export default App;
