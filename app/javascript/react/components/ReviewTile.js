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
      <div className="reviewButtons">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </div>
    </div>
  )
}

export default ReviewTile;
