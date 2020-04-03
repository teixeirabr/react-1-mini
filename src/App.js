import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
  }

  updatePicture = e => {
    console.log(e.target.value);
    this.setState({
      picture: e.target.value
    });
  };

  updateName = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };

  addFriend = () => {
    // let newFriends = this.state.friends.slice();
    let newFriends = [...this.state.friends];
    newFriends.push({ picture: this.state.picture, name: this.state.name });
    console.log(newFriends);

    this.setState({
      friends: newFriends,
      picture: "",
      name: ""
    });
  };

  render() {
    let displayFriends = this.state.friends.map((e, i, a) => (
      <div key={i}>
        <img width="200px" src={e.picture} alt={e.name} />
        <span>{e.name}</span>
      </div>
    ));
    return (
      <div>
        <span>Picture: </span>
        <input onChange={this.updatePicture} value={this.state.picture} />
        <span>Name: </span>
        <input onChange={this.updateName} value={this.state.name} />
        <button onClick={this.addFriend}>Add Friend</button>
        {displayFriends}
      </div>
    );
  }
}
