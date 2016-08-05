var React = require('react');
var $ = require('jquery');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {
      status: '',
      hi: ''
    };
  },
  componentDidMount: function() {
    console.log("mount...")
    $.get('/api/foo', function(result) {
      console.log("getting...")
      var res = result;
      console.log(res)
      if (this.isMounted()) {
        this.setState({
          status: res.status,
          hi: res.hi
        });
      }
    }.bind(this));
  },
  
  render: function() {
    return <div><p className="intro">Cyan Bird, your life messager....{this.state.status}{this.state.hi}</p></div>;
  }
});

ReactDOM.render(<HelloMessage />, document.getElementById('app'));
