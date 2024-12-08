import React from "react";
import Header from "../Header/Header";
import { PiShoppingCartBold } from "react-icons/pi";
import Logo from "../image/Logo.png";
import Image from "next/image";
import No from "../../app/image/No.png";
import Link from "next/link";
import Frame1 from "../../app/image/Frame1.png";
import Frame2 from "../../app/image/Frame2.png";
import Frame3 from "../../app/image/Frame3.png";
import Frame4 from "../../app/image/Frame4.png";
import chair from "../../app/image/chair.png";
import Large from "../../app/image/Large.png";
import Photo from "../../app/image/Photo.png";
import Parent from "../../app/image/Parent.png";

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
      <div className="w-[672px] h-[478px] bg-[#007580] absolute top-[303px] left-[300px] p-[64px_113px_54px_64px] gap-0">
        <p className="text-white text-2xl font-sans font-bold">
          {" "}
          About Us - Comforty
        </p>
        <p className="text-white font-sans mt-9">
          At Comforty, we believe that the right chair can transform your space
          and elevate your comfort. Specializing in ergonomic design, premium
          materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.{" "}
        </p>
        <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-36">
          View All Collection
        </button>
        <div className="w-[619px] h-[478px]  absolute top-[1px] left-[1001px] gap-0 -ml-[300px]">
          <Image src={chair} alt="" height={478} width={619} />
        </div>
      </div>
      {/**section */}
      <div className="ml-[800px] font-sans font-bold text-4xl mt-[700px]">
        What makes our Brand Different
      </div>
      <div className="absolute w-[1320px] h-[244px] top-[996px] left-[300px] flex gap-10">
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9] px-4">
          <Image src={Frame1} alt="" height={148} width={213.45} />
        </div>
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9]">
          <Image src={Frame2} alt="" height={148} width={213.45} />
        </div>
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9]">
          <Image src={Frame3} alt="" height={148} width={213.45} />
        </div>
        <div className="w-[309.45px] h-[244px] flex-shrink-0 p-[48px_0px_0px_0px] bg-[#F9F9F9]">
          <Image src={Frame4} alt="" height={148} width={213.45} />
        </div>
      </div>
      {/**product  */}
      <div className="w-[1920px] h-[461px] absolute top-[200px] gap-0 mt-[1200px]">
        <div className="w-full h-[44px] px-[300px] flex justify-start items-start  text-[32px] font-sans font-semibold whitespace-nowrap">
          Our Popular Products
          <div className="flex gap-4 mt-20 -ml-[250px]">
            <div className="w-[630px] h-[375px]  ">
              {/* Content for the first product */}
              <Image src={Large} alt="" height={375} width={630} />
              <div>
                <p className="block text-sm text-black mt-4">
                  The Poplar suede sofa
                </p>
              </div>
              <p className="text-xs text-black">$99.00</p>
            </div>
            <div className="w-[330px] h-[415px] ">
              {/* Content for the second product */}
              <Image src={Photo} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">The Dandy chair</p>
              <p className="text-xs text-black">$99.00</p>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Parent} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">The Dandy chair</p>
              <p className="text-xs text-black">$99.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 w-[1920px] mt-[1200px]"></div>
      <Footer />
    </div>
  );
};

export default page;
