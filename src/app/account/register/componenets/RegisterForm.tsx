"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import EmptyBtn from "@/app/productslisting/components/product/EmptyBtn";
import AccountForm from "../../components/AccountForm";
import FormErrorModal from "../../components/FormErrorModal";
import { siteUrlText } from "@/utility/baseExports";
import { useRouter } from "next/navigation";
import useValidAccount from "@/customHooks/useValidAccount";
import {
  CreateUserWithEmailAndPassword,
  SignInWithEmailAndPassword,
} from "@/firebase/appAuth";

import LoadingText from "@/app/components/extras/LoadingText";

const RegisterForm = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const validAccount = useValidAccount();

  const onSubmitForm = async () => {
    // console.log("Register user");
    setisLoading(true);
    try {
      // const register = await fetch(`${siteUrlText}/api/auth/register`, {
      //   method: "POST",
      //   body: JSON.stringify({ firstName, lastName, email, password }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const register = await CreateUserWithEmailAndPassword(email, password);

      if (register.ok) {
        // console.log("Registered Account!");
        const createdUserResponse = await fetch(
          siteUrlText + "/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
            }),
          }
        );
        const createdUserDB = await createdUserResponse.json();
        console.log(createdUserDB, "New user created at database!");
        const login = await SignInWithEmailAndPassword(email, password);
        router.push("account/login");
      } else {
        // console.log(register);
        if (register.msg === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMsg("Account already exists, proceed to log in");
        } else {
          setErrorMsg("Error: Check connection");
        }
      }
      setisLoading(false);
    } catch (error) {
      console.log((error as Error).message, "Error");
      setErrorMsg("Problem creating account, check network connections");
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (validAccount) {
      router.push("/account");
    } else {
      // console.log("log in");
    }
  }, [validAccount]);
  return (
    <>
      {isLoading && (
        <span className="block w-max mx-auto mb-8">
          <LoadingText label="Please wait..." />
        </span>
      )}
      <FormErrorModal errorMsg={errorMsg} />
      <AccountForm submitFormHandler={() => onSubmitForm()}>
        <TextInput
          label="First name"
          type="text"
          value={firstName}
          changeEvtHandler={(e) => setFirstName(e.target.value)}
        />
        <TextInput
          label="Last name"
          type="text"
          value={lastName}
          changeEvtHandler={(e) => setLastName(e.target.value)}
        />
        <TextInput
          label="Email"
          type="email"
          value={email}
          changeEvtHandler={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          changeEvtHandler={(e) => setPassword(e.target.value)}
        />
        <span className="block sm:w-[15rem] mx-auto">
          <EmptyBtn
            label="Create"
            className="bg-base text-white"
            disabled={isLoading}
            // clickHandler={onSubmitForm}
          />
        </span>
      </AccountForm>
    </>
  );
};

export default RegisterForm;
