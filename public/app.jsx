var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('Greeter');

var firstName = "Hans";
ReactDOM.render(
  <Greeter name={firstName} message="This isn't from te component... or is it?"/>,
  document.getElementById("app")
);
