import React from "react";
import "./Loader.css";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  size = LoaderSize.m,
  loading = true,
  className = "",
}) => {
  if (loading) {
    return <div className={"loader" + " " + className + " " + size}></div>;
  } else {
    return null;
  }
};
