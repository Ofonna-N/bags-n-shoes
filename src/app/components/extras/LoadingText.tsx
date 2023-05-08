import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  label: string;
};

const LoadingText: React.FC<Props> = ({ label = "please wait..." }) => {
  return (
    <div className="flex items-center gap-1">
      <AiOutlineLoading3Quarters className="animate-spin" />
      {label}
    </div>
  );
};

export default LoadingText;
