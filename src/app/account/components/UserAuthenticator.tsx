"use client";

import React, { useEffect, useState } from "react";
import { UserValidationPromise } from "@/utility/CustomTypes";
import useValidAccount from "@/customHooks/useValidAccount";
import { useRouter } from "next/navigation";

const UserAuthenticator = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const validAccount = useValidAccount();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (validAccount) {
        console.log("account valid");
      } else {
        console.log("account invalid");
        router.push("account/login");
      }
    }, 100);

    return () => clearTimeout(timeOut);
  }, [validAccount]);

  return <>{validAccount && children}</>;
};

export default UserAuthenticator;
