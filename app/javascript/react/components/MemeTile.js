import React, { Component } from 'react'

const MemeTile = props => {
  return(
    <div className="tile">
      <dd>
        <dl><img src={props.imageUrl}/></dl>
      </dd>
    </div>
  )
}

export default MemeTile;
