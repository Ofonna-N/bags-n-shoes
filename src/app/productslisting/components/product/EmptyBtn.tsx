import React from "react";

type Props = {
  label: string;
  className: string;
  clickHandler?: () => void;
  disabled?: boolean;
};

const EmptyBtn: React.FC<Props> = ({
  label,
  className,
  clickHandler,
  disabled,
}) => {
  return (
    <button
      className={`py-[1rem] w-full ${className} disabled:bg-slate-500`}
      disabled={disabled}
      onClick={clickHandler}
    >
      {label}
    </button>
  );
};

export default EmptyBtn;
