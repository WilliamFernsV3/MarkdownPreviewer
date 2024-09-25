import React from "react";
import htmlParser from "html-react-parser";
import PropTypes from "prop-types";
import { marked } from "marked";

marked.setOptions({
  "breaks": true,
  "gfm": true,
})

class Previewer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="preview">
        {
          htmlParser(marked(this.props.text))
        }
      </div>
    )
  }
}

Previewer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Previewer;
