import { RxCross2 } from "react-icons/rx";

interface Props {
  title: string;
  clickHanlder: () => void;
}

const SelectBadge: React.FC<Props> = ({ title, clickHanlder }) => {
  return (
    <button
      className="rounded-[35px] flex items-center gap-1 bg-white py-[0.1rem] px-2 border-[2px] hover:border-neutral-500"
      onClick={() => clickHanlder()}
    >
      {title}
      <RxCross2 className="mt-[2px] font-bold" />
    </button>
  );
};

export default SelectBadge;
