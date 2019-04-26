import React from "react";

const MemeTextField = props => {
  return(
    <div>
      <label>{props.labelName}</label>
      <input
        type="text"
        name={props.inputName}
        value={props.value}
        onChange={props.handleOnChange}
      />
    </div>
  );
};

export default MemeTextField;
