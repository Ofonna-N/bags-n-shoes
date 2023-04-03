"use client";
import React from "react";

interface Props {
  icon: any;
  className: string;
}

const IconBtn: React.FC<Props> = ({ icon, className }) => {
  return <button className={className}>{icon}</button>;
};

export default IconBtn;
