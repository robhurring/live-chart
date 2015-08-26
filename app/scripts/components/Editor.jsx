import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {
      defaultValue: '',
      rows: 10
    };
  },

  getInitialState() {
    return {
      value: this.props.defaultValue
    };
  },

  triggerChange() {
    if(this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  },

  insertTab() {
    let node = React.findDOMNode(this.refs.editor);
    let start = node.selectionStart;
    let end = node.selectionEnd;

    // insert tab
    node.value = `${node.value.substring(0, start)}\t${node.value.substring(end)}`;

    // reset caret
    node.selectionStart = node.selectionEnd = start + 1;
  },

  handleChange(e) {
    this.setState({value: e.target.value});
    this.triggerChange();
  },

  handleKeypress(e) {
    if(e.keyCode === 9) {
      e.preventDefault();
      this.insertTab();
    }
  },

  render() {
    return (
      <textarea
        ref="editor"
        className="form-control"
        rows={this.props.rows}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeypress}>
      </textarea>
    );
  }
});
