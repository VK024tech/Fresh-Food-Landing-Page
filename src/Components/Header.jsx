import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ArrowLongRightIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";

function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(false);

  function updateWidth() {
    if (window.innerWidth < 1280) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
      setBurgerMenu(false);
    }
  }

  useEffect(() => {
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  function Menu({ isMobile = false }) {
    return (
      <nav>
        <ul
          className={`text-gray-800 gap-4 h-fit  flex ${
            isMobile
              ? "flex-col absolute top-16 right-4 bg-white p-4 w-60 rounded-lg shadow-lg"
              : "flex-row"
          }`}
        >
          <li>
            <a
              href=""
              className="flex w-29 items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100"
            >
              <span className="pr-2">About Us</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex w-39 items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100"
            >
              <span className="pr-2">What We Do</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex w-33 items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100"
            >
              <span className="pr-2">Core Issues</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex w-20 items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100"
            >
              <span className="pr-2">News</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex w-49 items-center font-medium text-lg cursor-pointer group hover:font-bold transition-all ease-in-out duration-100"
            >
              <span className="pr-2">Learn and Engage</span>
              <ChevronDownIcon className="size-4 group-hover:text-orange-500 transition-all ease-in-out duration-100" />
            </a>
          </li>
          <li>
            <a
              href=""
              className="bg-blue-950  font-medium text-white p-3.5 border-2 border-blue-950 px-5 rounded-full hover:bg-white hover:text-blue-950 cursor-pointer transition-all ease-in-out duration-100"
            >
              Start Here
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  function BurgerMenu() {
    if (!screenWidth) {
      return <Menu isMobile={false} />;
    } else {
      return (
        <div className="relative">
          <Bars3BottomLeftIcon
            onClick={() => setBurgerMenu(!burgerMenu)}
            className="size-10 ml-2 cursor-pointer hover:text-cyan-800 transition-all ease-in-out duration-300"
            aria-label="Toggle navigation menu"
          />
          {burgerMenu && <Menu isMobile={true} />}
        </div>
      );
    }
  }

  return (
    <div className="flex flex-row justify-between items-center px-[clamp(20px,1rem+2vw,64px)] my-4">
      <div className="font-bold  text-[clamp(18px,2rem+2vw,24px)] flex flex-col text-green-800 ">
        
        <span>The</span>
        <span>Organic</span>
        <span>Food</span>
      </div>
      <BurgerMenu />
    </div>
  );
}

export default Header;
