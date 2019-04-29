import React, { Component } from 'react'

const ReviewTile = props => {
  return(
    <div>
      <dd>
        <dl>{props.timestamp}</dl>
        <dl>User: {props.email}</dl>
        <dl>Rating: {props.rating}</dl>
        <dl>Comment: {props.comment}</dl>
      </dd>
    </div>
  )
}


export default ReviewTile;
