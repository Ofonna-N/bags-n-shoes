import { getUserExists } from "@/firebase/appAuth";
import { UserValidationPromise } from "@/utility/CustomTypes";
import { Unsubscribe } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./storeHooks";
import { setUserState } from "@/appstore/slices/UserSlice";

const useValidAccount = () => {
  const [unSubscribe, setUnsubscribe] = useState<Unsubscribe | null>(null);
  const [validAccount, setValidAccount] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userExists = await getUserExists();
        // console.log(unSubscribe, "obj");
        // console.log(userExists, "value");
        setUnsubscribe(userExists.unsubscribe);
        setValidAccount(true);
        if (userExists.ok) {
          dispatch(setUserState({ exists: true }));
          console.log("User Valid");
        } else {
          dispatch(setUserState({ exists: false }));
          console.log("user Invalid");
        }
      } catch (error) {
        setValidAccount(false);
        setUnsubscribe((error as UserValidationPromise).unsubscribe);
        // console.log(error as Error, "ERROR");
      }
    };
    checkUser();
    // setUnsubscribe(unSubscribe);
    // console.log(typeof unSubscribe);
    return () => {
      if (unSubscribe) {
        // console.log("brekete");
        unSubscribe();
      }
    };
  }, []);

  return validAccount;
};

export default useValidAccount;
