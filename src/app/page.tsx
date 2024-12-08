import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

const page = () => {
  return (
    <div className="w-screen ">
      <Header />
      <Hero />
      <div className="w-[1920px] h-screen mt-[3500px] ml-12">
        <Footer />
      </div>
    </div>
  );
};

export default page;
