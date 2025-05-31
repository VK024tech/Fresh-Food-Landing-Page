import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
function Footer() {
  return (
    <div className="text-[clamp(24px,2rem+2vw,72px)] font-medium flex flex-col   px-[clamp(20px,1rem+2vw,16px)] pt-[clamp(20px,1rem+2vw,74px)] pb-4  bg-[#042A42] text-white">
      <div className="grid   md:grid-cols-14  gap-8">
        <div className="text-xl leading-tight col-span-2 max-w-31">
          The Organic Food
        </div>
        <div className="md:col-start-4 col-span-2 ">
          <div className="text-sm md:text-xl text-green-500 font-semibold pb-4">
            Quick Links
          </div>
          <div className="text-xs md:text-sm pb-2 cursor-pointer">Contact</div>
          <div className="text-xs md:text-sm pb-2 cursor-pointer">Glossary</div>
          <div className="text-xs md:text-sm pb-2 cursor-pointer">
            Site Accessibility
          </div>
        </div>
        <div className="md:col-start-8 col-span-2 ">
          <div className="text-sm md:text-xl text-green-500 font-semibold pb-4">
            Follow Us
          </div>
          <div className="text-xs md:text-sm pb-2 cursor-pointer">Linkedin</div>
          <div className="text-xs md:text-sm pb-2 cursor-pointer">Facebook</div>
          <div className="text-xs md:text-sm pb-2 cursor-pointer">
            Instagram
          </div>
        </div>
        <div className="md:col-start-11 md:col-span-4">
          <div className="text-sm md:text-xl  font-semibold pb-4">
            Join Our Mailing List
          </div>
          <div className="text-xs md:text-sm pb-2">
            We send regular Emails about updates, News, Issues
          </div>
          <div className="text-sm md:text-md pb-2 flex border-b-2 w-fit">
            <input
              className="outline-none"
              type="Email"
              placeholder="Email Address"
            />
            <a href="" className="font-semibold group flex items-center ">
              Submit
              <ArrowLongRightIcon className="size-6 ml-2  group-hover:ml-4 transition-all ease-in-out duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm mt-6 ">
        © The Organic Food. All rights reserved |{" "}
        <span className="border-b-2 mr-2 cursor-pointer"> Privacy Policy</span>|{" "}
        <span className="border-b-2 cursor-pointer">Terms and Conditions</span>
      </div>
    </div>
  );
}

export default Footer;
