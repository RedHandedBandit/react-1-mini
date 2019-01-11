import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }
  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }
  addFriend(){
    var {friends: friendsList, name, picture} = this.state
    friendsList.push({friendsName: name, friendsPicture: picture})
    this.setState({
      friends: friendsList,
      name: '',
      picture: ''
    })
  }
  
  render() {
    const friends = this.state.friends.map((friend, index) => {
      return (
        <div key={index}> 

          <img src={friend.friendsPicture} /> 
            <span> {friend.friendsName} </span>
          
        </div>
      )
    })

    return (
    <div>
      <label> Picture: </label>
      <input onChange ={(event) => this.updatePicture(event.target.value)} value={this.state.picture}/>
      <label> Name: </label>
      <input onChange ={(event) => this.updateName(event.target.value)} value={this.state.name} />
      <button onClick ={() => this.addFriend()} > AddFriend </button> 
      {friends}
    </div>
    );
  }
}

export default App;
