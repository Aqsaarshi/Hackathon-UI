import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import No from "../../app/image/No.png";
import Link from "next/link";
import Footer from "../Footer/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <div className=" w-[1920px] h-[84px] px-[300px] py-[20px] flex justify-between bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className="-mx-10"
        />
        <div className="flex items-center  ml-[280px] mr-[100px] w-[120px] h-[44px] px-[18px] py-[11px] gap-[12px] rounded-tl-[8px] bg-white relative z-10">
          <PiShoppingCartBold className="h-[22px] w-[22px] " />
          <p>Cart</p>
          <Image src={No} alt="No Items" height={30} width={30} />
        </div>
      </div>
      <div className="w-[1920px] h-[74px] px-[300px] py-[14px] flex justify-between items-center">
        {/* Navigation Links */}
        <nav className="w-[339px] flex flex-wrap items-center text-base gap-2">
          <a className="mr-5 hover:text-slate-400 font-Inter text-[#007580]">
            Home
          </a>
          <a className="mr-5 hover:text-slate-400 font-Inter text-[#636270]">
            Shop
          </a>
          <Link
            href="/Product"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Product
          </Link>
          <a className="mr-5 hover:text-slate-400 font-Inter text-[#636270]">
            Pages
          </a>
          <a className="mr-5 hover:text-slate-400 font-Inter text-[#636270]">
            About
          </a>
        </nav>

        {/* Contact Info */}
        <p className="text-black ml-auto">Contact: (808) 555-0111</p>
      </div>
      <div className="border-t border-gray-300 w-[1920px]"></div>
      <div className="w-[1320px] h-[731px] mt-48 left-[300px] absolute gap-0 ">
        {/* Your content here */}
        <div>
          <h1 className="text-5xl text-black text-center font-sans font-bold ">
            Questions Looks Here
          </h1>
          <p className="text-sm text-black text-center mt-4 ">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </p>
        </div>
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2 ">
              <div className="p-2 lg:w-1/2 md:w-1/2 w-full ">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      What types of chairs do you offer?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      How can we get in touch with you?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center  bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Do your chairs come with a warranty?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      What will be delivered? And When?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Can I try a chair before purchasing?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      How do I clean and maintain my Comforty chair?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="-ml-60">
          <div className="border-t border-gray-300 w-[1920px]"></div>
          <Footer />{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
