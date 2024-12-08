import React from "react";
import Image from "next/image";
import check from "../../app/image/check.png";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <div className=" flex justify-center items-center w-[1920px] h-[45px] bg-[#272343]">
        <Image className="" src={check} alt="" height={16} width={16} />
        <div className="w-[231px] h-[14px] font-sans text-[13px] font-normal leading-[14.3px] text-left custom-text text-white">
          Free shipping on all orders over $50
        </div>
        <div className="flex justify-between">
          <Accordion
            type="single"
            collapsible
            className="relative ml-[980px] text-white"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Eng</AccordionTrigger>

              <AccordionContent>urdu</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-start items-center gap-3 text-white mt-1 ml-2">
            <Link
              href="/Faq
            "
              className="hover:underline"
            >
              Faqs
            </Link>
            <AiOutlineExclamationCircle className="-mt-1" />
            <Link href="/contact" className="hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
