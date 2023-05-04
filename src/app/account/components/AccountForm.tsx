"use client";
import React from "react";

type Props = {
  submitFormHandler: () => void;
  children: React.ReactNode;
};

const AccountForm: React.FC<Props> = ({ children, submitFormHandler }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitFormHandler();
      }}
      className="w-full mb-[10rem] mx-auto sm:w-[30rem] md:w-[40rem] lg:w-[45rem] "
    >
      {children}
    </form>
  );
};

export default AccountForm;
