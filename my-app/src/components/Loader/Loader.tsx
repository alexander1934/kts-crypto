import React from "react";
import cn from "classnames";
import s from "./Loader.module.scss";

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

const Loader: React.FC<LoaderProps> = ({
  size = LoaderSize.m,
  loading = true,
  className = "",
}) => {
  if (loading) {
    return <div className={cn([s.loader], s[size], className)}></div>;
  } else {
    return null;
  }
};

export default React.memo(Loader);
