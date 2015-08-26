import React from 'react';
import Graph from './Graph';
import Editor from './Editor';

export default React.createClass({
  getInitialState() {
    return {
      definition: `graph TD;\n\tA-->B;\n\tA-->C;`
    };
  },

  updateDefinition(value) {
    this.setState({definition: value});
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <Editor
              defaultValue={this.state.definition}
              onChange={this.updateDefinition} />
          </div>
          <div className="col-xs-8">
            <div className="well well-lg">
              <Graph definition={this.state.definition} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
