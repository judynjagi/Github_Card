import React from 'react';
import ReactDom from 'react-dom';
import { CardList, Form } from 'Components';

class App extends React.Component{
  state = {
    users: []
  }

  addNewData = (newUser) => {
    this.setState(prevState => ({
      users: prevState.users.concat(newUser)
    }))

  }
  render(){
    return(
      <div>
        <Form onSubmit={this.addNewData}/>
        <CardList users={this.state.users}/>
     </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
