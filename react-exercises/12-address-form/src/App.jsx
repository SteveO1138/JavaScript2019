import React, { Component } from 'react';

import Address from './components/Address/Address';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: ""
  };
  render() {
    return (
      <div className="App">
        <Address />
        <DisplayResults address={this.state.address}/>
      </div>
    );
  }
  
export default App;
