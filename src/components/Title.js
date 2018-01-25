import React from 'react';
import '../style/title.css';

class Title extends React.Component {
  render(){
    const myTitles = ['Designer', 'Developer', 'Entrepreneur'];
    return(
    <span>
      <span className="title-all">
        <span className="title-action"> Designer </span>
        <span className="title-action">Developer </span>
        <span className="title-action">Entrepreneur </span>
      </span>
    </span>
    )
  }
}

export default Title;
