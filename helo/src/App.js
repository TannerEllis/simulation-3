import React, { Component } from 'react';
import Nav from './component/Nav/Nav';

import Main from './route'


class App extends Component {
  render() {
    return (
      <div >
      <Nav />
      <Main />
 
      </div>
    );
  }
}

export default App;
