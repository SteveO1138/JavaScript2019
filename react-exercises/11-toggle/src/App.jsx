import React, { Component } from "react";

/***
 *  As a user, I should be able to click on the button to hide the text.
 *  Clicking the button a second try unhides the text.
 */

class App extends Component {
  state = {
    showText: true,
    noShowText: false 
  };

  toggle = () => {
    this.setState({
      showText: this.state.showText

    })
      this.setState({
         noShowText: this.state.noShowText
    })
  };

  render() {
    return (
      <div className="container pt-4">
    
          }}

        <button type="button" class="btn btn-primary btn-lg mb-2">
          Show / Hide Text
         
       
        </button>
        <h1>Now You Dont!</h1>
        <h1>Now you see me!</h1>

        
        
       
      </div>
    );
  }
}

export default App;
