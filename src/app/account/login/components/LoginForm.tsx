"use client";

import EmptyBtn from "@/app/productslisting/components/product/EmptyBtn";
import React from "react";
import AccountForm from "../../components/AccountForm";
import TextInput from "../../components/TextInput";
import Link from "next/link";

const LoginForm = () => {
  const onSubmitForm = () => {
    console.log("Login");
  };

  return (
    <AccountForm submitFormHandler={() => {}}>
      <TextInput label="Email" type="email" />
      <TextInput label="Password" type="password" />
      <Link
        href={"/account/login/recover"}
        className="inline-block translate-y-[-1.5rem] border-b border-black text-[1.4rem] hover:border-b-[2px]"
      >
        Forgot your password?
      </Link>
      <span className="block sm:w-[15rem] mx-auto">
        <EmptyBtn
          label="Sign in"
          className="bg-black text-white"
          clickHandler={onSubmitForm}
        />
        <Link
          href={"/account/register"}
          className="block mt-2 w-max mx-auto border-b border-black text-center text-[1.4rem] hover:border-b-[2px]"
        >
          Create account
        </Link>
      </span>
    </AccountForm>
  );
};

export default LoginForm;
