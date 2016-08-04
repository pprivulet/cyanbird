var React = require('react');
var $ = require('jquery');
import './component.less';

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {
      status: '',
      hi: ''
    };
  },
  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var res = result[0];
      if (this.isMounted()) {
        this.setState({
          status: res.status,
          hi: res.hi
        });
      }
    }.bind(this));
  },
  
  render: function() {
    return <div><p className="intro">Cyan Bird, your life messager.{this.state.status}{this.state.hi}</p></div>;
  }
});


module.exports = HelloMessage;

