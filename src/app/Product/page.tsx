import React from "react";
import Header from "../Header/Header";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import No from "../../app/image/No.png";
import { PiShoppingCartBold } from "react-icons/pi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Item1 from "../../app/image/Item1.png";
import Item2 from "../../app//image/Item2.png";
import Item3 from "../../app/image/Item3.png";
import Item4 from "../../app/image/Item4.png";
import Item11 from "../../app/image/Item11.png";
import Item22 from "../../app/image/Item22.png";
import Item33 from "../../app/image/Item33.png";
import Item44 from "../../app/image/Item44.png";
import Items1 from "../../app/image/Items1.png";
import Items4 from "../../app/image/Items4.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import instagram from "../../app/image/instagram.png";
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

      <div className="w-[1920px] h-[461px] absolute top-[200px] gap-0">
        <div className="w-full h-[44px] px-[300px] flex justify-start items-start  text-[32px] font-sans font-semibold whitespace-nowrap">
          Featured Products
          <div className="flex gap-4 mt-20 -ml-[250px]">
            <div className="w-[330px] h-[415px]  ">
              {/* Content for the first product */}
              <Image src={Item1} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#007580] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-white" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              {/* Content for the second product */}
              <Image src={Item2} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Item3} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item4} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1920px] h-[461px] absolute top-[700px] gap-0">
        <div className="w-full h-[44px] px-[570px] flex justify-start items-start  text-[32px] font-sans font-semibold whitespace-nowrap">
          {/*Featured Products*/}
          <div className="flex gap-4 mt-20 -ml-[250px]">
            <div className="w-[330px] h-[415px]  ">
              {/* Content for the first product */}
              <Image src={Item11} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#007580] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-white" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              {/* Content for the second product */}
              <Image src={Item22} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Item33} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item44} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1920px] h-[461px] absolute top-[1200px] gap-0">
        <div className="w-full h-[44px] px-[570px] flex justify-start items-start  text-[32px] font-sans font-semibold whitespace-nowrap">
          {/*Featured Products*/}
          <div className="flex gap-4 mt-20 -ml-[250px]">
            <div className="w-[330px] h-[415px]  ">
              {/* Content for the first product */}
              <Image src={Items1} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#007580] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-white" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              {/* Content for the second product */}
              <Image src={Item2} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Item3} alt="" height={315} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Items4} alt="" height={312} width={330} />
              <p className="block text-sm text-[#007580] mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1924px] h-[754px] absolute top-[1813px] p-[100px_300px_100px_300px] gap-[70px] ">
        <div className="text-4xl text-black text-center font-bold font-sans">
          Or Subscribe To The Newsletter
          <div className="flex w-full max-w-sm items-center border-b mt-9 space-x-4 ml-[500px]">
            <Input type="email" placeholder="Email Address" />
            <Button className="bg-white text-black" type="submit">
              Submit
            </Button>
          </div>
          <div className="text-4xl mt-7 text-black text-center font-bold font-sans">
            Follow Products and Discounts on Instagram
            <Image
              src={instagram}
              alt=""
              height={200}
              width={1324}
              className="mt-16 ml-16"
            />
          </div>
        </div>
        <div className="-ml-72">
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
