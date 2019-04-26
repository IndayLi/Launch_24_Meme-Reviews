import React, { Component } from 'react'

const TextField = (props) => {
  return(

      <div>
      <label> {props.labelName} </label>
        <input
          type="text"
          name={props.inputName}
          value={props.value}
          onChange={props.handleOnChange}
        />
      </div>
  )
}

export default TextField
