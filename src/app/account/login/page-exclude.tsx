import Container from "@/app/components/containers/Container";
import React from "react";
import LoginForm from "./components/LoginForm";

const page = () => {
  return (
    <Container>
      <h3 className="text-[4rem] text-center mb-[3rem] mt-[3rem]">Login</h3>
      <LoginForm />
    </Container>
  );
};

export default page;
