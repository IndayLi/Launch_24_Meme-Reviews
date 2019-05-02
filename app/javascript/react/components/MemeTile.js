import React, { Component } from 'react'
import { Link } from 'react-router'

const MemeTile = props => {
  return(
    <div className="tile">
      <dd>
      <Link to={`/memes/${props.id}`}>
        <dl><img src={props.imageUrl}/></dl>
      </Link>
      </dd>
    </div>
  )
}

export default MemeTile;
