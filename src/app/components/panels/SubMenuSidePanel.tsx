"use client";
import SideMenuBtn from "../navbar/SideMenuBtn";

interface Props {
  data: { title: string; toggled: boolean };
  onBackbtnClicked: () => void;
  children: React.ReactNode;
}

const SubMenuSidePanel: React.FC<Props> = ({
  data,
  onBackbtnClicked,
  children,
}) => {
  // console.log(data, "checking");
  return (
    <div
      className={`bg-orange-900 absolute top-0 right-0 h-full transition-all ${
        data.toggled ? "w-full" : "w-0"
      } `}
    >
      <SideMenuBtn label={data.title} back onClicked={onBackbtnClicked} />

      <div className="bg-red-600 overflow-y-scroll h-full pb-12">
        {children}
      </div>
    </div>
  );
};

export default SubMenuSidePanel;
