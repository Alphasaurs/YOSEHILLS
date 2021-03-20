import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="merge">
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
