import React from "react";

class Takeinput extends React.Component {

  onSubmithandler = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmithandler}>
          <div>Welcome to Form</div>
          <input type="text" placeholder="Enter your Name"/>
          <button type="text">Add Name </button>
        </form>
      </>
    )
  }
}

export default Takeinput; 