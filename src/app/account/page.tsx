import React from "react";
import Container from "../components/containers/Container";
import LogoutForm from "./components/LogoutForm";

import UserAuthenticator from "./components/UserAuthenticator";
import AccountDetails from "./components/AccountDetails";

const AccountPage = () => {
  // console.log(appAuth.currentUser, "Current User");
  // return null;

  return (
    <Container>
      <UserAuthenticator>
        <h2 className="text-[4rem] mt-[3rem]">Account</h2>
        <LogoutForm />
        <div className="flex flex-wrap gap-y-9  mt-[3rem] mb-[12rem] text-[1.6rem]">
          <div className="grow-[1]">
            <h3 className="text-[4rem]">Order history</h3>
            <p>You haven't placed any orders yet.</p>
          </div>
          <div className="">
            <AccountDetails />
          </div>
        </div>
      </UserAuthenticator>
    </Container>
  );
};

export default AccountPage;
