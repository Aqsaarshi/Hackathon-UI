import React from "react";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import No from "../../app/image/No.png";
import { Button } from "@/components/ui/button";
import product from "../../app/image/product.png";
import Logo1 from "../../app/image/Logo1.png";
import Logo2 from "../../app/image/Logo2.png";
import Logo3 from "../../app/image/Logo3.png";
import Logo4 from "../../app/image/Logo4.png";
import Logo5 from "../../app/image/Logo5.png";
import Logo6 from "../../app/image/Logo6.png";
import Logo7 from "../../app/image/Logo7.png";
import Item1 from "../../app/image/Item1.png";
import Item2 from "../../app//image/Item2.png";
import Item3 from "../../app/image/Item3.png";
import Item4 from "../../app/image/Item4.png";
import Item5 from "../../app/image/Item5.png";
import Item6 from "../../app/image/Item6.png";
import Item7 from "../../app/image/Item7.png";
import Item8 from "../../app/image/Item8.png";

import { HiOutlineShoppingCart } from "react-icons/hi";
import Category from "../../app/image/Category.png";
import C2 from "../../app/image/C2.png";
import C3 from "../../app/image/C3.png";
import hotCategory from "../../app/image/hotCategory.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="w-[1920px] h-[84px] px-[300px] py-[20px] flex justify-between bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className="ml-[10px]" // Adjust margin-left here to shift it right
        />
        <Link
          href="/Cart"
          className="flex items-center ml-[220px] mr-[100px] w-[120px] h-[44px] px-[18px] py-[11px] gap-[12px] rounded-tl-[8px] bg-white relative z-10"
        >
          <PiShoppingCartBold className="h-[22px] w-[22px] " />
          <p>Cart</p>
          <Image src={No} alt="No Items" height={30} width={30} />
        </Link>
      </div>

      <div className="w-[1920px] h-[74px] px-[300px] py-[14px] flex justify-between items-center">
        {/* Navigation Links */}
        <nav className="w-[339px] flex flex-wrap items-center text-base gap-2">
          <a
            href="#"
            className="mr-5 hover:text-slate-400 font-Inter text-[#007580]"
          >
            Home
          </a>

          <Link
            href="/Cart"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Shop
          </Link>

          <Link
            href="/Product"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Product
          </Link>
          <Link
            href="/Singlepg"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Pages
          </Link>
          <Link
            href="/About"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            About
          </Link>
        </nav>

        {/* Contact Info */}
        <a href="/Contact" className="text-black ml-auto hover:text-slate-400">
          Contact: (808) 555-0111
        </a>
      </div>

      {/* Hero Section */}
      <div className="w-[1370px] h-[850px] gap-0 rounded-b-[48px] bg-[#F0F2F3] mx-72">
        <div className="w-[557px] h-[337px] absolute top-[400px] left-[380px] gap-0 rounded-tl-[8px]">
          <p className="font-sans text-black ">Welcome to chairy</p>
          <div className="w-[557px] h-[337px] absolute top-[267px] left-[70px] gap-0"></div>{" "}
          <p className="text-5xl font-sans font-bold mt-4">Best Furniture</p>
          <p className="text-5xl font-sans font-bold">
            Collection For Your Interior.
          </p>
          <Button
            className="w-[171px] h-[52px] top-[514px] left-[70px] mt-9 bg-[#029FAE] text-white font-sans"
            variant="outline"
          >
            Shop Now
          </Button>
        </div>
        {/**This is main Product pic */}
        <div className="w-[434px] h-[584px] absolute top-[115px] left-[1200px] gap-0  mt-44">
          <Image src={product} alt="" height={584} width={434} />
        </div>
      </div>
      {/* this is companies logos */}
      <div className="flex justify-between  w-[1321px] h-[139px] absolute top-[1107px] left-[300px] gap-0 ">
        <Image
          src={Logo1}
          alt=""
          height={87}
          width={85}
          className="h-[139px] -mt-4"
        />
        <Image
          src={Logo2}
          alt=""
          height={109}
          width={107}
          className="h-[139px] -mt-3"
        />
        <Image
          src={Logo3}
          alt=""
          height={139}
          width={135}
          className="h-[139px] -mt-4"
        />
        <Image
          src={Logo4}
          alt=""
          height={66}
          width={64}
          className="h-[64px] mt-4"
        />
        <Image
          src={Logo5}
          alt=""
          height={101}
          width={98}
          className="h-[101px]"
        />
        <Image
          src={Logo6}
          alt=""
          height={115}
          width={113}
          className="h-[115px] -mt-2"
        />
        <Image
          src={Logo7}
          alt=""
          height={87}
          width={84}
          className="h-[87px] mt-5"
        />
      </div>
      {/**this is features page  */}
      <div className="w-[1920px] h-[495px] absolute top-[1270px] gap-0">
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
      {/**This Top categories */}
      <div className="w-[1920px] h-[495px] absolute top-[1270px] gap-0">
        <div className="w-full h-[508px] absolute top-[600px]  text-white  ">
          {" "}
          <h1 className="ml-80 text-[32px] font-sans font-semibold whitespace-nowrap text-black ">
            Top categories
          </h1>
          <div className="flex gap-7 mt-9 ml-80">
            <Image src={Category} alt="" height={424} width={424} />
            <Image src={C2} alt="" height={424} width={424} />
            <Image src={C3} alt="" height={424} width={424} />
          </div>
        </div>
      </div>
      {/*This is stylish chair */}
      {/* Stylish Chair Section */}
      <div className="w-[1320px] h-[648px] absolute top-[2604px] left-[323px] ">
        <div className="w-full h-full  flex justify-center items-center">
          <Image
            src={hotCategory}
            alt="Stylish Chair"
            height={648}
            width={1320}
            className="rounded-md"
          />
        </div>
      </div>

      <div className="w-[1320px] h-[919px] absolute top-[3425px] left-[350px] gap-0 ">
        <div className="w-full h-[44px] -ml-10 flex justify-start items-start  text-[32px] font-sans font-semibold whitespace-nowrap">
          <div>
            {" "}
            <h1 className="text-center">Our Products</h1>
          </div>{" "}
          <div className="flex gap-4 mt-20 -ml-[200px]">
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
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Item3} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item4} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
          </div>
          {/**dosra  */}
          <div className="flex gap-4 mt-[500px] -ml-[1360px]">
            <div className="w-[330px] h-[415px]  ">
              {/* Content for the first product */}
              <Image src={Item5} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              {/* Content for the second product */}
              <Image src={Item6} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px] ">
              <Image src={Item7} alt="" height={315} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm  -mt-8 ml-[280px]">
                <HiOutlineShoppingCart className="text-black" />
              </div>
            </div>
            <div className="w-[330px] h-[415px]">
              <Image src={Item8} alt="" height={312} width={330} />
              <p className="block text-sm text-black mt-4">
                Library Stool Chair
              </p>
              <p className="text-xs text-black">$20</p>
              <div className="relative">
                <Link
                  href="/Cart"
                  className="w-[44px] h-[44px] absolute bg-[#F0F2F3] gap-0 rounded-sm -mt-8 ml-[280px]"
                >
                  <HiOutlineShoppingCart className="text-black" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 w-[1920px] mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
