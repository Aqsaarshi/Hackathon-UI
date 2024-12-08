import React from "react";
import Header from "../Header/Header";
import Link from "next/link";
import Image from "next/image";
import No from "../../app/image/No.png";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import Item3 from "../../app/image/Item3.png";
import Items1 from "../../app/image/Items1.png";
import {
  FaFacebook,
  FaPinterest,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import frame from "../../app/image/frame.png";
import layout from "../../app/image/layout.png";
import { IoLogoInstagram } from "react-icons/io";

const page = () => {
  return (
    <div>
      <Header />
      <div className="w-[1920px] h-[84px] px-[300px] py-[20px] flex justify-between bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className="-mx-10"
        />
        <div className="flex items-center ml-[280px] mr-[100px] w-[120px] h-[44px] px-[18px] py-[11px] gap-[12px] rounded-tl-[8px] bg-white relative z-10">
          <PiShoppingCartBold className="h-[22px] w-[22px]" />
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
      <h1 className="text-xl font-sans mt-[120px] ml-52">Bag</h1>
      <div className="w-[1609px] h-[632.89px] absolute top-[290px] left-[150px] gap-0 ">
        <div className="w-[350.67px] h-[295px] top-[28px] left-[1100px] gap-0 ml-[1300px] mt-8">
          Summary
          <Image src={frame} alt="" height={295} width={350.67} />
        </div>
        <div className="subtotal">
          <span>Subtotal</span>
          $198.00
        </div>

        <div className="w-[1100px] h-[547.89px] p-[22px_278.67px_0px_88px] gap-0 -mt-[280px]"></div>
        <div className="w-[963px] h-[211px] absolute top-[80px] left-[16px] gap-3 flex">
          <Image src={Items1} alt="" height={150} width={150} />
          <Image
            src={layout}
            alt=""
            height={105}
            width={688}
            className="absolute ml-[180px] mt-10"
          />
          <FaRegHeart className="mt-40" />
          <GoTrash className="mt-40" />
        </div>
        <div className="w-[933px] h-[211px] p-[24px_0] gap-3 bg-white -mt-[220px] flex">
          <Image src={Item3} alt="" height={150} width={150} />
          <Image
            src={layout}
            alt=""
            height={105}
            width={688}
            className="absolute ml-[180px] mt-[4px]"
          />
          <FaRegHeart className="mt-40" />
          <GoTrash className="mt-40" />
        </div>
        <footer className="w-[1920px] bg-gray-100 text-gray-600 shadow-lg mt-auto -ml-[200px]">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-wrap md:text-left text-center items-start">
              {/* Logo and Social Links */}
              <div className="w-full md:w-1/4 mb-4">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                  <Image src={Logo} alt="Logo" height={40} width={168} />
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Vivamus tristique odio sit amet velit semper, eu posuere
                  turpis interdum. Cras egestas purus
                  <div className="flex justify-start mt-2 space-x-2 text-gray-600">
                    <FaFacebook />
                    <FaTwitter />
                    <IoLogoInstagram />
                    <FaPinterest />
                    <FaYoutube />
                  </div>
                </p>
              </div>
              {/* Categories */}
              <div className="w-full md:w-1/4 mb-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-4">
                  <li>
                    <a className="text-black hover:text-gray-800">Sofa</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-gray-800">Armchair</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-gray-800">Wing Chair</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#007580]">
                      Desk Chair
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#007580]">
                      Park Bench
                    </a>
                  </li>
                </nav>
              </div>
              {/* Support */}
              <div className="w-full md:w-1/4 mb-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  Support
                </h2>
                <nav className="list-none mb-4">
                  <li>
                    <a className="text-black hover:text-gray-800">
                      Help & Support
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-gray-800">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-gray-800">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-gray-800">Help</a>
                  </li>
                </nav>
              </div>
              {/* Newsletter */}
              <div className="w-full md:w-1/4 mb-4">
                <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">
                  NEWSLETTER
                </h2>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-full bg-gray-100 rounded border border-gray-300 text-gray-700 py-1 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                  <button className="ml-2 text-white bg-[#029FAE] py-2 px-4 rounded">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Bitters chicharrones fanny pack waistcoat green juice
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="container px-5 py-4 mx-auto flex items-center justify-center">
              <p className="text-sm text-gray-500">
                © 2024 - Designed & Developed by Zakirsoft
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
