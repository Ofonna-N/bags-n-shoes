"use client";

import EmptyBtn from "@/app/productslisting/components/product/EmptyBtn";
import React, { useEffect, useState } from "react";
import AccountForm from "../../components/AccountForm";
import TextInput from "../../components/TextInput";
import Link from "next/link";
import FormErrorModal from "../../components/FormErrorModal";
import { useRouter, useSearchParams } from "next/navigation";
import FormSucessModal from "../../components/FormSucessModal";
import { SignInWithEmailAndPassword } from "@/firebase/appAuth";
import useValidAccount from "@/customHooks/useValidAccount";
import LoadingText from "@/app/components/extras/LoadingText";

const LoginForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validAccount = useValidAccount();
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitForm = async () => {
    // console.log("Login details", email, password);
    setisLoading(true);
    const loginStatus = await SignInWithEmailAndPassword(email, password);
    setisLoading(false);

    if (loginStatus.ok) {
      // console.log("has user: ");
      router.push("/account");
    } else {
      setErrorMsg("Incorrect email or password.");
    }
    // return null;
    // try {
    //   const login = await fetch(`${siteUrlText}/api/auth/login`, {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   // const userInfo = await login.json();
    //   // console.log(userInfo);
    //   if (login.ok) {
    //     console.log("Logged In!!", await login.json());
    //     // console.log("has user: ", appAuth);
    //     router.push("/account");
    //   } else {
    //     // console.log("Error");
    //     setErrorMsg("Incorrect email or password.");
    //   }
    // } catch (error) {
    //   // setErrorMsg("Incorrect email or password.");
    //   console.log((error as Error).message);
    // }
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
        <span className="block w-max mx-auto mb-7">
          <LoadingText label="Logging you in..." />
        </span>
      )}
      <FormErrorModal errorMsg={errorMsg} />
      <AccountForm submitFormHandler={onSubmitForm}>
        <FormSucessModal successMsg={params.get("msg")} />
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
        <Link
          href={"/account/login/recover"}
          className="inline-block translate-y-[-1.5rem] border-b border-black text-[1.4rem] hover:border-b-[2px]"
        >
          Forgot your password?
        </Link>
        <span className="block sm:w-[15rem] mx-auto">
          <EmptyBtn
            label="Sign in"
            className="bg-base text-white hover:outline-[2px] hover:outline outline-base transition-all duration-75"
            disabled={isLoading}
            // clickHandler={onSubmitForm}
          />
          <Link
            href={"/account/register"}
            className="block mt-2 w-max mx-auto border-b border-black text-center text-[1.4rem] hover:border-b-[2px]"
          >
            Create account
          </Link>
        </span>
      </AccountForm>
    </>
  );
};

export default LoginForm;
