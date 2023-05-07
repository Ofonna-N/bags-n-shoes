import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

type Props = {
  errorMsg: string;
};

const FormErrorModal: React.FC<Props> = ({ errorMsg }) => {
  if (!errorMsg) return null;
  return (
    <ul className="list-disc w-max mx-auto mb-[3rem]">
      <h3 className="text-[2.4rem] flex items-center gap-[3px]">
        <RiErrorWarningFill className="text-[1.8rem] text-red-600" />
        Please adjust the following:
      </h3>
      <li className="ml-[6rem] text-[1.6rem]">{errorMsg}</li>
    </ul>
  );
};

export default FormErrorModal;
