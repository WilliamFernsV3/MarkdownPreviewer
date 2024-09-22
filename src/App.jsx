import React from "react";
import { Provider as ReduxProvider, connect } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import PropTypes from "prop-types";




class Presentational extends React.Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.props.submitUpdateText(event.target.value);
  }

  render() {
    return (
      <div>
        <textarea id="editor" value={this.props.text} onChange={this.handleTextChange} />
        <div id="preview" />
      </div>
    )
  }
}

Presentational.propTypes = {
  text: PropTypes.string.isRequired,
  submitUpdateText: PropTypes.func.isRequired,
}

const UPDATE_TEXT = "UPDATE_TEXT";

const updateTextAction = (text) => {
  return {
    type: UPDATE_TEXT,
    text,
  }
}

const defaultState = {
  text: "",
}

const MarkdownPreviewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return Object.assign({}, state, { text: action.text });
    default:
      return state;
  }
}

const mapStateToProps = (state) => {
  return { text: state.text };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitUpdateText: (text) => dispatch(updateTextAction(text))
  }
}

const store = createStore(MarkdownPreviewReducer);

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ReduxProvider store={store}>
        <Container />
      </ReduxProvider>
    )
  }
}
export default App;
