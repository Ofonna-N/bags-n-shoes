"use client";
import SideMenuBtn from "../navbar/SideMenuBtn";

interface Props {
  isToggled: boolean;
  onBackbtnClicked: () => void;
}

const SubMenuSidePanel: React.FC<Props> = ({ isToggled, onBackbtnClicked }) => {
  return (
    <div
      className={`bg-orange-900 absolute top-0 right-0 h-full transition-all ${
        isToggled ? "w-full" : "w-0"
      } `}
    >
      <SideMenuBtn label="Bags" back onClicked={onBackbtnClicked} />
    </div>
  );
};

export default SubMenuSidePanel;
