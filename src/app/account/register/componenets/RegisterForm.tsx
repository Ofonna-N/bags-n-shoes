"use client";
import React from "react";
import TextInput from "../../components/TextInput";
import EmptyBtn from "@/app/productslisting/components/product/EmptyBtn";
import AccountForm from "../../components/AccountForm";

const RegisterForm = () => {
  const onSubmitForm = () => {
    console.log("Register user");
  };

  return (
    <AccountForm submitFormHandler={() => {}}>
      <TextInput label="First name" type="text" />
      <TextInput label="Last name" type="text" />
      <TextInput label="Email" type="email" />
      <TextInput label="Password" type="password" />
      <span className="block sm:w-[15rem] mx-auto">
        <EmptyBtn
          label="Create"
          className="bg-black text-white"
          clickHandler={onSubmitForm}
        />
      </span>
    </AccountForm>
  );
};

export default RegisterForm;
