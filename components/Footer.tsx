import React from "react";
import Link from "next/link";
import Social from "./main/Social";
import { BsFileCode } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-full h-[50vh] vstack items-center justify-center bg-blue text-white mt-16">
            <Social color="text-white" />
            <div className="w-fit grid grid-cols-3 gap-7 items-center justify-items-center mt-8">
                <Link href="/">خانه</Link>
                <Link href="/about">درباره من</Link>
                <Link href="/blogs">مقالات</Link>
                <Link href="/projects">پروژه ها</Link>
                <Link href="/projects/4">اکسکا</Link>
                <Link href="/projects/2">تالک باکس</Link>
            </div>
            <p className="text-sm text-center pt-8">
                برنامه نویس فول استک زبان های typescript و rust ، طراح و سازنده
                اپلیکیشن موبایل ، کامپیوتر و وب سایت
            </p>
            <div className="w-80 hstack items-center justify-around mt-4">
                <BsFileCode className="text-white w-8 h-8" />
                <FaCodeBranch className="text-white w-8 h-8" />
                <MdQrCodeScanner className="text-white w-8 h-8" />
            </div>
            <p className="pt-8">developer@sabber.dev</p>
        </div>
    );
};

export default Footer;
