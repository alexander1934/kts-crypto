import React from "react";
import "./Input.css";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  value?: string;

  onChange?: (value: any) => void;
};

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  let inputClass = "input";

  if (props.disabled) {
    inputClass += " input_disabled";
  }
  if (className !== undefined) {
    inputClass += ` ${className}`;
  }
  return (
    <input {...props} className={inputClass} type="text" value={props.value} />
  );
};
