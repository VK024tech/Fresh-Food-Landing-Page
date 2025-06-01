import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import freshVegetables from "../assets/Images/pictureThird.jpg";
import kitchen from "../assets/Images/pictureFirst.jpg";
import landscape from "../assets/Images/Landscape.jpg";
import food from "../assets/Images/food.jpg";
import health1 from "../assets/Images/Health1.jpg";
import health2 from "../assets/Images/Health2.jpg";
import health3 from "../assets/Images/Health3.jpg";
import community from "../assets/Images/community.jpg";
import integrity from "../assets/Images/integrity.jpg";
import advocacy from "../assets/Images/advocacy.jpg";

function Body() {
  return (
    <div className="[&>*]:text-gray-800 ">
      <div className="  grid md:grid-cols-18  gap-0 md:gap-8 lg:grid-rows-1   items-center  px-[clamp(20px,1rem+2vw,64px)] py-[clamp(20px,1rem+2vw,96px)] [grid-template-rows:auto_1fr]">
        <div className="text-[clamp(24px,2rem+2vw,72px)] lg:row-start-1 row-start-2 font-semibold col-span-18 lg:col-span-9">
          <div className="mb-6 leading-tight">
            Together, we're growing a fresher, healthier future with organic
            food.
          </div>
          <div className="text-lg sm:text-2xl  font-medium">
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
        <div className="grid grid-cols-2 gap-4   col-span-17 lg:col-span-8">
          <div className="flex  gap-8 mb-4 ">
            <img
              className="rounded-full w-xl "
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
            className="rounded-4xl col-span-2  hidden lg:block"
            src={landscape}
            alt="Fresh vegetable"
          />
        </div>
      </div>
      <div>
        <div className="text-[clamp(24px,2rem+2vw,72px)] font-medium flex flex-col items-center  px-[clamp(20px,1rem+2vw,16px)] py-[clamp(20px,1rem+2vw,24px)]  bg-[#EDEAE2]">
          <div className=" py-[clamp(20px,1rem+2vw,48px)] grid md:grid-cols-18 gap-0 md:gap-8">
            <div className="col-span-16 col-start-2 ">
              <div className="text-center leading-tight max-w-6xl pb-8">
                A safer, more equitable, and stronger future with fresh, organic
                food for all.
              </div>
              <div className="text-lg sm:text-2xl  font-medium pb-16 text-center">
                When we unite to demand fresh, organic food, we create a
                healthier future for all. Join us.
              </div>
              <img
                className="rounded-2xl pb-2 mx-auto w-2xl "
                src={food}
                alt="Fresh vegetable"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-18 gap-0 md:gap-8 ">
            <div className="col-span-16 col-start-2 ">
              <div className="text-lg sm:text-2xl font-semibold pb-2 text-cyan-800">
                Putting Health First
              </div>
              <div className="text-left leading-tight text-[clamp(24px,2rem+2vw,72px)] max-w-6xl pb-8">
                Freshness that Feeds Health, Happiness, and Home
              </div>
              <div className="text-lg sm:text-2xl font-medium pb-16">
                Dedicated to advancing access to fresh, real food, we're
                fostering a movement centered on people, ensuring everyone has
                the freedom to live a life of health, joy, and true abundance
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[clamp(24px,2rem+2vw,72px)]  font-medium flex flex-col items-center  px-[clamp(20px,1rem+2vw,16px)] py-[clamp(20px,1rem+2vw,24px)] ">
        <div className="grid mb-12  md:grid-rows-1 md:grid-cols-18 gap-0 md:gap-8 [grid-template-rows:1fr_auto]">
          <div className="col-span-12   col-start-2 leading-tight">
            Don’t miss out on your health
            <div className="text-lg sm:text-2xl pt-8 font-medium pb-8">
              Stay fresh with us! Explore our latest harvests, healthy tips,
              community events, and resources for vibrant living
            </div>
          </div>
          <a
            href=""
            className="text-xl h-fit  row-start-2 md:row-start-1 font-semibold group flex  md:pt-4 items-start col-start-2   md:col-start-17 col-span-9 "
          >
            News and Updates
            <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4  group-hover:text-orange-500 transition-all ease-in-out duration-300" />
          </a>
        </div>
        <div className="grid  lg:grid-cols-20  gap-8">
          <div className="lg:col-start-2 col-span-6">
            <img
              className="rounded-4xl pb-2  w-2xl "
              src={health1}
              alt="Fresh vegetable"
            />
            <div>
              <div className="text-sm sm:text-lg font-semibold pb-2 text-cyan-800">
                Freshness with Integrity • Privacy with Purpose
              </div>
              <div className="text-left leading-tight text-[clamp(18px,2rem+2vw,32px)] max-w-6xl pb-4">
                Nourishing Lives, Cultivating Trust
              </div>
              <div className="text-sm sm:text-[18px] font-medium ">
                At our core, we believe in Nourishing Lives, Cultivating Trust.
                Every fruit, vegetable, and wholesome ingredient we offer is
                selected to fuel your body and bring joy to your table. But our
                mission goes deeper: it's about building genuine trust through
                transparent practices, connecting you directly to the dedicated
                growers and ethical sources behind your food. We're here to
                ensure every bite supports your well-being, strengthens our
                community, and fosters a truly dependable food experience for
                everyone.
              </div>
              <a
                href=""
                className="text-xl font-semibold group flex items-center mt-4 "
              >
                Learn More
                <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4 group-hover:text-orange-500 transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
          <div className=" col-span-6">
            <img
              className="rounded-4xl pb-2  w-2xl "
              src={health2}
              alt="Fresh vegetable"
            />
            <div>
              <div className="text-sm sm:text-lg font-semibold pb-2 text-cyan-800">
                Freshness with Integrity • Privacy with Purpose
              </div>
              <div className="text-left leading-tight text-[clamp(18px,2rem+2vw,32px)] max-w-6xl pb-4">
                Your Privacy, Our Promise
              </div>
              <div className="text-sm sm:text-[18px] font-medium ">
                We believe in the power of wholesome goodness – from the quality
                products we offer to the connections we build. Our commitment is
                to foster a space where you can confidently explore options that
                nourish your life and contribute to a healthier, more vibrant
                community. It's about bringing you closer to what truly matters,
                every step of the way.
              </div>
              <a
                href=""
                className="text-xl font-semibold group flex items-center mt-4 "
              >
                Learn More
                <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4 group-hover:text-orange-500 transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
          <div className=" col-span-6">
            <img
              className="rounded-4xl pb-2  w-2xl "
              src={health3}
              alt="Fresh vegetable"
            />
            <div>
              <div className="text-sm sm:text-lg font-semibold pb-2 text-cyan-800">
                Freshness with Integrity • Privacy with Purpose
              </div>
              <div className="text-left leading-tight text-[clamp(18px,2rem+2vw,32px)] max-w-6xl pb-4">
                Your Well-being: Fresh Food, Trusted Privacy
              </div>
              <div className="text-sm sm:text-[18px] font-medium ">
                We get it: in today's world, knowing who you can trust is
                everything. That's why we're committed to Nourishing Lives with
                the freshest food, while also Cultivating Trust in every
                interaction. We promise transparency in our sourcing and a
                secure approach to your personal information, ensuring your
                peace of mind is always on the menu.
              </div>
              <a
                href=""
                className="text-xl font-semibold group flex items-center mt-4 "
              >
                Learn More
                <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4 group-hover:text-orange-500 transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[clamp(30px,2rem+2vw,44px)]  font-medium flex flex-col items-center  px-[clamp(20px,1rem+2vw,16px)] py-[clamp(20px,1rem+2vw,94px)] bg-amber-200 ">
        <div className="grid  grid-cols-18 [grid-template-rows:auto_auto] py-8">
          <div className="grid mb-8 col-start-1 md:col-start-2 col-span-full  md:grid-rows-1 md:grid-cols-18 gap-0 md:gap-8 [grid-template-rows:1fr_auto]">
            <div className="col-span-12    leading-tight">
              Pro-consumer from the start
              <div className="text-lg sm:text-2xl pt-8 font-medium pb-8">
                We tirelessly champion the purest, most ethical food practices,
                rigorously vetting every source to ensure your table is always
                filled with trusted goodness.
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:grid-rows-2 col-start-1 md:col-start-2 row-start-2 col-span-16">
            <div className="text-sm md:text-xl   flex">
              <div className="bg-cyan-800 h-full w-2 "></div>
              <div className="ml-4">
                <div className="text-2xl md:text-3xl">
                  5+ Collaborative Initiatives
                </div>
                launched to strengthen local food ecosystems and support ethical
                growing practices
              </div>
            </div>
            <div className="text-sm md:text-xl   flex">
              <div className="bg-cyan-800 h-full w-2 "></div>
              <div className="ml-4">
                <div className="text-2xl md:text-3xl">Over 7,500 Insights</div>
                gathered from our community of eaters, shaping how we source and
                share fresh produce.
              </div>
            </div>
            <div className="text-sm md:text-xl   flex">
              <div className="bg-cyan-800 h-full w-2 "></div>
              <div className="ml-4">
                <div className="text-2xl md:text-3xl">
                  40 Workshops and Training Sessions
                </div>
                hosted for local growers and aspiring food producers, investing
                in the future of sustainable food.
              </div>
            </div>
            <div className="text-sm md:text-xl  flex">
              <div className="bg-cyan-800 h-full w-2 "></div>
              <div className="ml-4">
                <div className="text-2xl md:text-3xl">
                  15+ Local Partnerships
                </div>
                forged with community gardens and food access programs, ensuring
                more fresh food reaches those who need it.
              </div>
            </div>
            <div className="text-sm md:text-xl   flex">
              <div className="bg-cyan-800 h-full w-2 "></div>
              <div className="ml-4">
                <div className="text-2xl md:text-3xl">
                  3 Seasons of "Fresh Finds" Guides
                </div>
                published, offering tips, recipes, and stories to help you make
                the most of seasonal produce.
              </div>
            </div>
            <div className="text-sm md:text-xl  flex">
              <div className="bg-cyan-800 h-full w-2 "></div>
              <div className="ml-4">
                <div className="text-2xl md:text-3xl">Over 200 Enthusiasts</div>
                hosted at our cooking demonstrations and farm-to-table learning
                events, celebrating the joy of real food.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[clamp(24px,2rem+2vw,72px)]  font-medium flex flex-col items-center  px-[clamp(20px,1rem+2vw,16px)] py-[clamp(20px,1rem+2vw,24px)] ">
        <div className="grid my-12  md:grid-rows-1 md:grid-cols-18 gap-0 md:gap-8 [grid-template-rows:1fr_auto]">
          <div className="col-span-12   col-start-2 leading-tight">
            Your health, Our priority
            <div className="text-lg sm:text-2xl pt-8 font-medium pb-8">
              We believe that the right to nourishing, trustworthy food is
              fundamental for everyone. Through championing ethical sourcing,
              fostering vibrant community connections, and upholding rigorous
              quality standards, we ensure every bite is reliably safe, and that
              you are empowered with the knowledge to make truly informed
              choices about the food that fuels your life.
            </div>
          </div>
          <a
            href=""
            className="text-xl h-fit  row-start-2 md:row-start-1 font-semibold group flex  md:pt-4 items-start col-start-2   md:col-start-17 col-span-9 "
          >
            What we do
            <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4  group-hover:text-orange-500 transition-all ease-in-out duration-300" />
          </a>
        </div>
        <div className="grid  lg:grid-cols-20  gap-8">
          <div className="lg:col-start-2 col-span-6">
            <img
              className="rounded-4xl pb-2  w-2xl "
              src={advocacy}
              alt="Fresh vegetable"
            />
            <div>
              <div className="text-left leading-tight text-[clamp(18px,2rem+2vw,32px)] max-w-6xl pb-4">
                Policy and Advocacy
              </div>
              <div className="text-sm sm:text-[18px] font-medium ">
                We champion ethical sourcing and an equitable food system where
                every producer is valued and every consumer can make informed
                choices.
              </div>
              <a
                href=""
                className="text-xl font-semibold group flex items-center mt-4 "
              >
                Learn More
                <ArrowLongRightIcon className="size-8 ml-2  group-hover:ml-4 group-hover:text-orange-500 transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
          <div className=" col-span-6">
            <img
              className="rounded-4xl pb-2  w-2xl "
              src={community}
              alt="Fresh vegetable"
            />
            <div>
              <div className="text-left leading-tight text-[clamp(18px,2rem+2vw,32px)] max-w-6xl pb-4">
                Community Engagement
              </div>
              <div className="text-sm sm:text-[18px] font-medium ">
                We provide resources and foster connections for everyone to know
                and exercise their right to fresh, trustworthy food.
              </div>
              <a
                href=""
                className="text-xl font-semibold group flex items-center mt-4 "
              >
                Learn More
                <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4 group-hover:text-orange-500 transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
          <div className=" col-span-6">
            <img
              className="rounded-4xl pb-2  w-2xl "
              src={integrity}
              alt="Fresh vegetable"
            />
            <div>
              <div className="text-left leading-tight text-[clamp(18px,2rem+2vw,32px)] max-w-6xl pb-4">
                Food Integrity
              </div>
              <div className="text-sm sm:text-[18px] font-medium ">
                We safeguard food quality and expand access to pure, wholesome
                ingredients for all.
              </div>
              <a
                href=""
                className="text-xl font-semibold group flex items-center mt-4 "
              >
                Learn More
                <ArrowLongRightIcon className="size-8 ml-2 group-hover:ml-4 group-hover:text-orange-500 transition-all ease-in-out duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[clamp(24px,2rem+2vw,72px)] font-medium flex flex-col items-center  px-[clamp(20px,1rem+2vw,16px)] py-[clamp(20px,1rem+2vw,74px)]  bg-[#A0C654]">
        <div className="grid md:grid-cols-18 my-8 gap-0 md:gap-8 ">
          <div className="col-span-10 col-start-2 ">
            <div className="text-sm sm:text-xl font-semibold pb-1 text-cyan-800">
              From Farm to Your Plate
            </div>
            <div className="text-left leading-tight text-[clamp(30px,2rem+2vw,47px)] max-w-6xl pb-4">
              Transparent Sourcing & Ethics
            </div>
            <div className="text-lg sm:text-2xl font-medium pb-4">
              Giving you clarity on where your food comes from, how it's grown,
              and if it aligns with your values.
            </div>
            <a
              href=""
              className="text-xl font-semibold group flex items-center mt-2 "
            >
              Our Priorties
              <ArrowLongRightIcon className="size-8 ml-2  group-hover:ml-4  transition-all ease-in-out duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-[clamp(24px,2rem+2vw,72px)] font-medium flex flex-col items-center  px-[clamp(20px,1rem+2vw,16px)] py-[clamp(20px,1rem+2vw,74px)]  bg-[#fb8686]">
        <div className="grid md:grid-cols-18 my-8 gap-0 md:gap-8 ">
          <div className="col-span-full col-start-2 ">
            <div className="text-sm sm:text-xl font-semibold pb-1 text-center">
              We're Here to Help
            </div>
            <div className="leading-tight text-[clamp(30px,2rem+2vw,47px)]  pb-4  text-center">
              Something on your mind?
            </div>
            <div className="text-lg sm:text-2xl font-medium pb-4 text-center">
              Have a question about fresh produce, a tip for a healthy recipe,
              or an idea to strengthen our food community? We'd love to hear
              from you.
            </div>
            <button className="hover:bg-blue-950 font-medium flex hover:text-white p-2 border-2 text-sm sm:text-xl mx-auto hover:border-blue-950 px-5 rounded-full  text-blue-950 cursor-pointer transition-all ease-in-out duration-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
