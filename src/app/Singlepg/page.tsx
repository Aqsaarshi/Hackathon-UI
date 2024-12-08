import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import No from "../../app/image/No.png";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import Link from "next/link";
import Item2 from "../../app/image/Item2.png";

import Item7 from "../../app/image/Item7.png";
import Item1 from "../../app/image/Item1.png";
import Items4 from "../../app/image/Items4.png";
import Item3 from "../../app/image/Item3.png";
import Items1 from "../../app/image/Items1.png";
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
      {/** Yaha pr pic or uska content ha "this is pic and another content" */}
      <section className="text-gray-600 body-font">
        <div className="container mx-48 flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={Item2}
              height={607}
              width={675}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-sans text-gray-900">
              Library Stool
              <span className="hidden lg:block">Chair</span>
              <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg mt-8">
                $99.00 USD
              </button>
              <div className="border-t border-gray-300 w-[1000px]  mt-4"></div>
            </h1>
            <p className="mb-8 leading-relaxed font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Nullam tincidunt erat enim. Lorem ipsum dolor
              <br /> sit amet, consectetur adipiscing
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <PiShoppingCartBold className="mt-1 mr-3" /> Add to Card
              </button>
            </div>
          </div>
        </div>
      </section>
      {/**this is feature product  */}
      <div className="w-[1920px] h-[495px] absolute top-[1000px] -ml-24 gap-0">
        <div className="w-full h-[44px] px-[300px] flex justify-start items-start  text-[32px] font-sans font-semibold whitespace-nowrap">
          Featured Products
          <div className="flex gap-4 mt-20 -ml-[250px]">
            <div className="w-[330px] h-[415px]  ">
              {/* Content for the first product */}
              <Image src={Item7} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-right -mt-[20px] text-black">$99</p>
            </div>
            <div className="w-[330px] h-[415px]  ">
              {/* Content for the second product */}
              <Image src={Item1} alt="" height={315} width={330} />

              <p className="block text-sm text-black mt-4 ">
                Library Stool Chair
              </p>
              <p className="text-xs text-right text-black -mt-[20px]">$99</p>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Items4} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-right text-black -mt-[20px]">$99</p>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item3} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-right text-black -mt-[20px]">$99</p>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Items1} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-right  text-black -mt-[20px]">$99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="inline-flex  text-black border-b py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-24 -ml-[890px]">
          View All
        </button>
      </div>
      <div className="border-t border-gray-300 w-[1920px] mt-[550px]"></div>
      <Footer />{" "}
    </div>
  );
};

export default page;
