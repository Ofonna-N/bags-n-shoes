"use client";

import { setUserState } from "@/appstore/slices/UserSlice";
import { useAppDispatch } from "@/customHooks/storeHooks";
import { SignOutUser } from "@/firebase/appAuth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { RxAvatar } from "react-icons/rx";

const LogoutForm = () => {
  const router = useRouter();
  const [signOutPending, setSignOutPending] = useState(false);
  const dispach = useAppDispatch();

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignOutPending(true);
    const signOut = await SignOutUser();
    dispach(setUserState({ email: "", exists: false }));
    setSignOutPending(false);
    if (signOut.ok) {
      router.push("/account/login");
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <button
        className="flex items-center gap-1 underline disabled:text-gray-400"
        disabled={signOutPending}
      >
        <RxAvatar /> Log out
      </button>
    </form>
  );
};

export default LogoutForm;
