import React from 'react';
import 'Styles/Card';

export class Card extends React.Component {
  render(){
    const {
      name,
      company,
      avatar_url
    } = this.props
    return(
      <div>
        <img id="avatar" src={avatar_url}/>
        <div className="info">
          <div>Name: {name}</div>
          <div>Company: {company}</div>
        </div>
      </div>
    )
  }
}

