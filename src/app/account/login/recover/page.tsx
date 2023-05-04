import Container from "@/app/components/containers/Container";
import React from "react";
import RecoverForm from "./components/RecoverForm";
import Link from "next/link";

const page = () => {
  return (
    <Container>
      <h3 className="text-[4rem] text-center mt-[6rem] mb-5">
        Reset your password
      </h3>
      <p className="text-center text-[1.6rem] mb-[3rem]">
        We will send you an email to reset your password
      </p>
      <RecoverForm />
    </Container>
  );
};

export default page;
