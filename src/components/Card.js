import React from 'react';
import '../App.css';


const Card = ({props}) => {
  return (
    <div className='container'> 
        <div className='movie'>
        <div>
            <p>{props.Year}</p>
        </div>
        <div>
            <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/400' } alt={props.Title} />


        </div>
        <div>
            <span>{props.Type}</span>
            <h3>{props.Title}</h3>
        </div>
        </div>

    </div>
  )
}

export default Card