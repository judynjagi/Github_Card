import React from 'react';
import { Card } from 'Components';

export class CardList extends React.Component {
  render(){
    const { users } = this.props
    return(
      <div>
        {users.map(user => <Card key={user.id} {...user}/>)}
      </div>
    )
  }
}
