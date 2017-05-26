var React = require('react');

var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');

var Greeter = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from default'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleUpdates: function(updates) {
    this.setState(updates);

  },
  render: function() {
    var message = this.state.message;
    var name = this.state.name;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onUpdates={this.handleUpdates}/>
      </div>
    );
  }
});

module.exports = Greeter;
