import React, { JSX } from "react";
import { IButtonProps } from "./Button.interfaces";
import "./Button.scss";

const Button: React.FC<IButtonProps> = ({ label }): JSX.Element => (
  <button className="button" type="button">
    {label}
  </button>
);

export default Button;
