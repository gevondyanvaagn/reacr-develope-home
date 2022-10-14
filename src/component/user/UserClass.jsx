import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.incriment = this.incriment.bind(this);
    this.discriment = this.discriment.bind(this);
    this.state = {
      count: 0
    } 

  }

  incriment() {
    this.setState({ count: this.state.count + 1 })
  }

  discriment() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incriment}>++++</button>
        <button onClick={this.discriment}>----</button>
      </div>
    )
  }
}

export default UserClass;