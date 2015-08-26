/* global mermaid */
import React from 'react';

export default React.createClass({
  componentDidMount() {
    if(!this.mounted) {
      this.mounted = true;
      mermaid.initialize({startOnLoad: false});
      this.update();
    }
  },

  componentDidUpdate(prevProps, prevState) {
    this.update();
  },

  componentWillUpdate(nextProps, nextState) {
    try {
      let ok = mermaid.parse(nextProps.definition);
      return ok;
    } catch(_err) {
      return false;
    }
  },

  update() {
    let el = React.findDOMNode(this.refs.graph);
    el.removeAttribute('data-processed');
    mermaid.init();
  },

  render() {
    return (
      <div>
        <div ref="graph" className="mermaid">{this.props.definition}</div>
      </div>
    );
  }
})
