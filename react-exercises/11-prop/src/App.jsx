import React, { Component } from "react";
// Import IsUserLoggedIn here
import IsUserLoggedIn from "./IsUserLoggedIn.jsx"


class App extends Component {
  render() {
    const Users = [ {
      name: "Bob",
      isUserLoggedIn: false
    },
    {
      name: "Joe",
      isUserLoggedIn: true
    },
    {
      name: "Tom",
      isUserLoggedIn: true
    }
    ];
    return (
      <div className="App">
        <IsUserLoggedIn Users={Users} />
      </div>
    );
  }
}

export default App;

