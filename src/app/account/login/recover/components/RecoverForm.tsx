"use client";
import AccountForm from "@/app/account/components/AccountForm";
import TextInput from "@/app/account/components/TextInput";
import EmptyBtn from "@/app/productslisting/components/product/EmptyBtn";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RecoverForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const onSubmitForm = () => {
    // console.log("Recover Email");
    router.push(
      "/account/login?msg=We've sent you an email with a link to update your password!"
    );
  };

  return (
    <>
      <AccountForm submitFormHandler={() => onSubmitForm()}>
        <TextInput
          label="Email"
          type="email"
          value={email}
          changeEvtHandler={(e) => setEmail(e.target.value)}
        />
        <span className="block sm:w-[15rem] mx-auto mt-[3rem]">
          <EmptyBtn
            label="Submit"
            className="bg-base text-white text-[1.6rem] hover:outline-[2px] hover:outline outline-base transition-all duration-75"
          />
        </span>
      </AccountForm>
    </>
  );
};

export default RecoverForm;
