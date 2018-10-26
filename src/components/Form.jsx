import React from 'react';
import axios from 'axios';


export class Form extends React.Component {
  state = {
    userName: ""
  };

  handleInputChange = (e) => {
    const userName = e.target.value;
    this.setState({
      userName
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { userName } = this.state
    axios.get(`https://api.github.com/users/${userName}`)
    .then(response => {
      const users = response.data
      onSubmit(users)
    });
  };


  render(){
    const { userName } = this.state
    return(
      <form className="form" onSubmit={this.handleSubmit} users={this.state.users}>
        <input
          value={userName}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Github username"
        />
        <button type="submit">Add Card</button>
      </form>
    )
  }
}
