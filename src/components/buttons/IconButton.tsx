"use client";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  clickHandler: () => void;
}

const IconButton: React.FC<Props> = ({ icon: Icon, clickHandler }) => {
  return <button onClick={() => clickHandler()}>{<Icon />}</button>;
};

export default IconButton;
