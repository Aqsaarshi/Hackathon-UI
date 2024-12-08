import React from "react";
import Image from "next/image";
import Header from "../Header/Header";
import Logo from "../../app/image/Logo.png";
import No from "../../app/image/No.png";
import { PiShoppingCartBold } from "react-icons/pi";
import group from "../../app/image/group.png";
import waranty from "../../app/image/waranty.png";
import Footer from "../Footer/Footer";

const page = () => {
  return (
    <div className="w-full">
      {/* Header */}
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
      {/* Contact Section */}
      <section className="w-[1920px] text-gray-600 body-font relative">
        <h1 className="text-3xl font-sans text-center font-bold mt-7">
          Get In Touch With Us
        </h1>
        <p className="text-center font-sans mt-7">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-start justify-center gap-10">
          {/* Image */}
          <Image
            src={group}
            alt="Group"
            height={537}
            width={393}
            className="rounded-lg"
          />

          {/* Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-[1920px] p-6 shadow-lg rounded-lg">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-4 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe.
            </p>
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full h-[50px] bg-white rounded border border-gray-300 focus:border-[#029FAE] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-[50px] bg-white rounded border border-gray-300 focus:border-[#029FAE] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 bg-white rounded border border-gray-300 focus:border-[#029FAE] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none"
              ></textarea>
            </div>
            <button className="h-[55px] w-full text-white bg-[#029FAE] border-0 py-4 px-6 focus:outline-none hover:bg-[#93dce2] rounded text-lg font-sans">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Warranty Image */}
      <div className="w-[1920px] flex justify-center mt-10">
        <Image
          src={waranty}
          alt="Warranty"
          width={1320}
          height={270}
          className="rounded-lg"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
