var GreaterMessage = React.createClass({

  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hallooootjes {name}!</h1>
        <p> {message} </p>
      </div>
    );
  }
});

var GreaterForm = React.createClass({
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


var Greater = React.createClass({

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
        <GreaterMessage name={name} message={message}/>
        <GreaterForm onUpdates={this.handleUpdates}/>
      </div>
    );
  }
});

var firstName = "Hans"
ReactDOM.render(
  <Greater  message="This isn't from te component... or is it?"/>, document.getElementById("app")
);
