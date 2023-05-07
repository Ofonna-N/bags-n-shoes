import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
type Props = {
  successMsg: string | null;
};
const FormSucessModal: React.FC<Props> = ({ successMsg }) => {
  if (!successMsg) return null;
  return (
    <h3 className="text-[1.7rem] flex  items-start gap-[3px] w-full mx-auto mb-[15px]">
      <IoCheckmarkCircle className="text-[1.8rem] text-green-600 mt-3" />
      We've sent you an email with a link to update your password.
    </h3>
  );
};

export default FormSucessModal;
