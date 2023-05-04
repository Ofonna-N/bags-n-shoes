"use client";
import AccountForm from "@/app/account/components/AccountForm";
import TextInput from "@/app/account/components/TextInput";
import EmptyBtn from "@/app/productslisting/components/product/EmptyBtn";
import React from "react";

const RecoverForm = () => {
  const onSubmitForm = () => {
    console.log("Recover Email");
  };

  return (
    <AccountForm submitFormHandler={() => {}}>
      <TextInput label="Email" type="email" />
      <span className="block sm:w-[15rem] mx-auto mt-[3rem]">
        <EmptyBtn
          label="Submit"
          className="bg-black text-white text-[1.6rem]"
          clickHandler={onSubmitForm}
        />
      </span>
    </AccountForm>
  );
};

export default RecoverForm;
