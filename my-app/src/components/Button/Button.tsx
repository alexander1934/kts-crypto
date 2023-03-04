import React from "react";
import { LoaderSize } from "@components/Loader";
import Loader from "@components/Loader";
import cn from "classnames";
import s from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className = "", ...props }) => {
  return (
    <button
      data-testid="button"
      className={cn(s["button"])}
      disabled={props.disabled || props.loading}
      {...props}
    >
      {props.loading && <Loader size={LoaderSize.s} />}
      {props.children}
    </button>
  );
};

export default React.memo(Button);
