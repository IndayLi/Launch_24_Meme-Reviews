import React, { Component } from 'react'

const MemeTile = props => {

  return(
    <div>
      <dd>
        <dl>Title: {props.title}</dl>
        <dl>Link: {props.url}</dl>
        <br/>
      </dd>
    </div>
  )
}

export default MemeTile
