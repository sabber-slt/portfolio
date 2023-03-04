import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { AiFillCloseSquare } from "react-icons/ai";

export const LinkNav = ({ href, txt }: any) => {
    return (
        <Link href={href} className="font-bold text-white text-lg">
            {txt}
        </Link>
    );
};

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative w-full h-full">
            <button
                aria-label="menu"
                onClick={() => setShow(true)}
                className="absolute z-50 top-10 w-14 h-10 fstack left-6 lg:left-10 flex items-center justify-center bg-green-600 rounded-md"
            >
                <HiMenuAlt1 className="text-blue w-12 h-12" />
            </button>
            {show && (
                <>
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        exit={{ x: -200 }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 70,
                        }}
                        className="fixed z-50 top-0 left-0 w-72 h-screen bg-blue bg-opacity-90 flex flex-col items-center justify-center px-4 space-y-5"
                    >
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-5 right-4 "
                        >
                            <AiFillCloseSquare className="w-7 h-7 text-white" />
                        </button>
                        <LinkNav txt="خانه" href="/" />
                        <LinkNav txt="درباره من" href="/about" />
                        <LinkNav txt="پروژه ها" href="/projects" />
                        <LinkNav txt="مقالات" href="/blogs" />
                        <LinkNav txt="اکسکا" href="/projects/4" />
                        <LinkNav txt="تالک باکس" href="/projects/2" />
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default Navbar;
