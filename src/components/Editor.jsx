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
    return (
      <textarea id="editor" value={this.props.text} onChange={this.handleTextChange} />
    )
  }
}

Editor.propTypes = {
  text: PropTypes.string.isRequired,
  submitUpdateText: PropTypes.func.isRequired,
}


export default Editor;
