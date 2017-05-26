var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name;
    var message = this.refs.message;

    if (name.value.length > 0) {
      updates.name = name.value;
      name.value = '';
    }
    if (message.value.length > 0) {
      updates.message = message.value;
      message.value = '';
    }
    this.props.onUpdates(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name..." autoFocus />
          <br/><br/>
        </div>
        <div>
          <textarea rows="4" cols="50" ref="message" placeholder="Enter message..." />
          <br/><br/>
        </div>
        <div>
          <button>Send updates</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
