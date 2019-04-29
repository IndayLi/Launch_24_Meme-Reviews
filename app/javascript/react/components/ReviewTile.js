import React, { Component } from 'react'

const ReviewTile = props => {
  return(
    <div className="review-tile">
      <dd>
        <dl>{props.timestamp}</dl>
        <dl>Username: {props.username}</dl>
        <dl>Rating: {props.rating}</dl>
        <dl>Comment: {props.comment}</dl>
      </dd>
    </div>
  )
}

export default ReviewTile;
