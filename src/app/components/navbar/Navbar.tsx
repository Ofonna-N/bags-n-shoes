import Link from "next/link";
import CategoryBtnsContainer from "./CategoryBtnsContainer";
import MenuToggler from "./MenuToggler";
import NavBarRightSideWrapper from "./NavBarRightSideWrapper";
import Image from "next/image";

const Navbar = () => {
  // console.log("Nav bar rendered");
  // console.log(process.env.API_KEY);
  return (
    <div className="relative py-12 shadow-sm flex items-center justify-between gap-8">
      <MenuToggler />
      <Link href={"/"}>
        <Image
          src="images/logo.svg"
          alt="logo"
          width={250}
          height={250}
          className="w-[70px] md:w-[80px] lg:w-[90px]"
        />
      </Link>

      {/**@ts-expect-error Async Server Component*/}
      <CategoryBtnsContainer />
      <div className="flex justify-end lg:grow ">
        <NavBarRightSideWrapper />
      </div>
    </div>
  );
};

export default Navbar;
