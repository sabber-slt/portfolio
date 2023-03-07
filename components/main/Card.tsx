import Link from "next/link";
import React from "react";
import BlurImage from "./BlurImage";
import { motion } from "framer-motion";

type Props = {
    href: string;
    image: string;
    title: string;
    content: string;
};

const Card = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                ease: "linear",
                duration: 1,
                delay: 1,
            }}
            className="w-80 lg:w-80 h-96 lg:h-96 vstack bg-white rounded-lg shadow-xl overflow-hidden"
        >
            <BlurImage
                src={props.image}
                alt={props.title}
                size="50%"
                pri={false}
                cls="w-full h-48"
            />
            <div className="h-12 center font-bold">
                <h3>{props.title}</h3>
            </div>
            <p className="text-right px-2 text-sm leading-6">
                {props.content}...
            </p>
            <Link
                href={props.href}
                className="font-bold text-sm underline my-3 text-blue"
            >
                مطالعه بیشتر
            </Link>
        </motion.div>
    );
};

export default Card;
