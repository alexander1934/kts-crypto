import React from "react";
import classNames from "classnames";
import s from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  value?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  let inputClass = classNames(
    {
      [s.input]: true,
      [s.input_disabled]: props.disabled,
    },
    className
  );

  return (
    <input {...props} className={inputClass} type="text" value={props.value} />
  );
};

export default React.memo(Input);
