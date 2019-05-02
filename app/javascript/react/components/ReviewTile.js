import React, { Component } from 'react';

const ReviewTile = props => {
  return(
    <div className="review-tile">
      <dd className={"memeId" + props.memeId}>
        <dl className="review-username">— {props.username}</dl>
        <dl className="review-date">{props.timestamp}</dl>
        <dl className="review-rating">{props.rating}★</dl>
        <dl className="review-comment">{props.comment}</dl>
      </dd>
    </div>
  )
}

export default ReviewTile;
