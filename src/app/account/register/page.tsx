import Container from "@/app/components/containers/Container";
import React from "react";
import RegisterForm from "./componenets/RegisterForm";

const RegisterPage = () => {
  return (
    <Container>
      <h2 className="text-[4rem] text-center mb-[3rem] mt-[3rem]">
        Create account
      </h2>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
