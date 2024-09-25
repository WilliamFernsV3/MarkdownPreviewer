import React from "react";
import { Provider as ReduxProvider, connect } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import PropTypes from "prop-types";
import { Editor, Previewer } from "./components";

class Presentational extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const text = this.props.text;
    const styles = {
      Container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }
    }
    return (
      <div style={styles.Container}>
        <Editor text={text} submitUpdateText={this.props.submitUpdateText} />
        <Previewer text={text} />
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
  text: "# Simple Markdown Previewer \n## Subtitle Here\n[This is a link](https://github.com/WilliamFernsV3/)\n```bash\necho(\"this is a code block\")\n```\n## Another Subtitle\n>This is a block quote\n\n## Image:\n\n![Image](https://static.vecteezy.com/system/resources/thumbnails/022/963/918/small/ai-generative-cute-cat-isolated-on-solid-background-photo.jpg)\n\nThis is **some bold text**."
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
