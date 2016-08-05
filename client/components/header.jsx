import React from "react";
import Logo from './Logo.jsx';
import Login from './Login.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Logo/>
        <Login/>
      </div>
    );
  }
}
