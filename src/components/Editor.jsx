import React from "react";
import PropTypes from "prop-types";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.props.submitUpdateText(event.target.value);
  }

  render() {
    const styles = {
      Container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      },
      TextArea: {
        width: "100%",
      }
    }

    return (
      <div style={styles.Container}>
        <textarea id="editor" value={this.props.text} onChange={this.handleTextChange} style={styles.TextArea} />
      </div>
    )
  }
}

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  submitUpdateText: PropTypes.func.isRequired,
}


export default Editor;
