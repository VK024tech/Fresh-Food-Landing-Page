import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import freshVegetables from "../assets/Images/pictureThird.jpg";
import kitchen from "../assets/Images/pictureFirst.jpg";
import landscape from "../assets/Images/Landscape.jpg";

function Body() {
  return (
    <div className="[&>*]:text-gray-800 ">
      <div className="py-24  grid grid-cols-18 gap-8 items-center  px-16">
        <div className="text-7xl font-semibold col-span-9">
          <div className="mb-6 leading-tight">
            Together, we're growing a fresher, healthier future with organic
            food.
          </div>
          <div className="text-2xl font-medium">
            Empowering healthier choices, we champion fresh, organic food to put
            Oregon's people and planet first.
          </div>
          <a
            href=""
            className="text-xl font-semibold group flex items-center mt-8 "
          >
            Start Here
            <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4 group-hover:text-orange-500 transition-all ease-in-out duration-300" />
          </a>
        </div>
        <div className="col-span-1"></div>
        <div className="grid grid-cols-2 gap-4 col-span-8">
          <div className="flex gap-8 mb-4 ">
            <img
              className="rounded-full w-xl"
              src={freshVegetables}
              alt="Fresh vegetable"
            />
            <img
              className="rounded-full rounded-bl-lg w-xl"
              src={kitchen}
              alt="Fresh vegetable"
            />
          </div>
          <img
            className="rounded-4xl col-span-2  "
            src={landscape}
            alt="Fresh vegetable"
          />
        </div>
      </div>
      <div>
        <div className="text-7xl font-medium flex flex-col items-center px-16 py-24  bg-[#EDEAE2]">
          <div className="py-16">
            <div className="text-center leading-tight max-w-6xl pb-8">
              A safer, more equitable, and stronger future with fresh, organic
              food for all.
            </div>
            <div className="text-2xl font-medium pb-16">
              When we unite to demand fresh, organic food, we create a healthier
              future for all. Join us.
            </div>
            <iframe
            className="mx-auto"
              width="980"
              height="520"
              src="https://www.youtube.com/embed/f-XIt9dMGlg?si=eSmmV9DIjOVDFQL-&amp;start=261"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <div className="text-2xl font-semibold pb-4 text-cyan-800">
              Putting Health First
            </div>
            <div className="text-left leading-tight max-w-6xl pb-8">
              Good health, joy, and economic opportunities
            </div>
            <div className="text-2xl font-medium pb-16">
              OCJ is on a mission to advance consumers’ rights, growing a
              justice movement that puts people at the center so that all of us
              have the freedom to live a life of dignity and abundance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
