import ser1 from "../src/ser1.jpg";
import contactus from "../src/contactus.jpg";
import spc from "../src/spc.jpg";

export default function App() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex left-2 md:py-20 pt-1">
          <div className="bg-white bg-opacity-80 text-[#0b2b3c] p-4 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">Our Services Details</p>
            <div className="flex gap-2">
              <a href="/Home" className="text-lg ">
                Home
              </a>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <a href="/About Us" className="text-lg ">
                About Us
              </a>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={contactus} alt="contactus" className="w-full md:h-auto " />
        </div>
      </div>
      <div className=" h-auto w-full flex flex-wrap md:flex-nowrap">
        <div className="flex flex-col w-full md:w-1/2 p-4 md:p-4 mt-20">
          <div className="py-1 border-b-8 border-l-8 border-[#5f3afc] w-44 half-top-border border-t-8">
            <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
              CORE FEATURES
            </h2>
          </div>
          <h1 className="text-xl md:text-3xl font-black pb-10 text-[#0B2B3C]">
            A House Of Creative & Intelligence
          </h1>
          <p className="">
            In social science, agency is defined as the capacity of individuals
            to act independently and to make their own free choices.
          </p>
          <ul className="list-disc pl-5  p-4 rounded-lg text-black font-semibold">
            <li className="mb-2">
              Our vision is to inspire businesses to put employee
            </li>
            <li className="mb-2">
              Wellbeing at the heart of everything they do.
            </li>
            <li className="mb-2">
              Our mission is to use employee wellbeing as a tool
            </li>
            <li className="mb-2">To champion positive change in the modern</li>
          </ul>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words,
          </p>
        </div>

        <div className="w-full md:w-1/2 h-auto mt-24 p-4">
          <img src={spc} alt="spc" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="h-auto w-full flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 h-auto mt-5">
          <img src={ser1} alt="spc" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 mt-5 p-4">
          <p className="text-xl font-semibold text-black">
            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation
          </p>
          <p className="  text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-disc pl-5 bg-gray-100 p-4 rounded-lg text-black font-semibold mb-2">
            <li className="mb-2">
              Our vision is to inspire businesses to put employee
            </li>
            <li className="mb-2">
              Wellbeing at the heart of everything they do.
            </li>
            <li className="mb-2">
              Our mission is to use employee wellbeing as a tool
            </li>
            <li className="mb-2">To champion positive change in the modern</li>
          </ul>
          <p className="">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words,
          </p>
        </div>
      </div>
      <p className="mt-4 p-4">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
      </p>
      <p className="mt-1 p-4">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
      </p>
    </>
  );
}
