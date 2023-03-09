import React from "react";
import "./Button.css";
import { Loader, LoaderSize } from "./../Loader/Loader";

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ className = "", ...props }) => {
  let buttonClass = "button";
  if (props.loading || props.disabled) {
    buttonClass += " button_disabled";
  }

  if (className !== "") {
    buttonClass += ` ${className}`;
  }

  return (
    <button
      data-testid="button"
      className={buttonClass}
      disabled={props.disabled || props.loading}
      {...props}
    >
      {props.loading && <Loader size={LoaderSize.s} />}
      {props.children}
    </button>
  );
};
