import React, { FC } from "react";
import BlurImage from "../main/BlurImage";
import { Main } from "../../types/interfaces";
import { motion } from "framer-motion";

interface Props {
    image: string;
    title: string;
    content: string;
}
const Item = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 1, delay: 0.8 }}
            className="w-80 lg:w-96 vstack z-40"
        >
            <BlurImage
                src={props.image}
                alt={props.title}
                size="50%"
                pri={false}
                cls="w-24 h-24"
            />
            <h1 className="font-bold text-xl my-3">{props.title}</h1>
            <p className="text-center">{props.content}</p>
        </motion.div>
    );
};

const Intro: FC<{ data: Main[] }> = ({ data }) => {
    return (
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-around space-y-10 lg:space-y-0 py-10">
            {data.map((item) => (
                <Item
                    key={item.id}
                    image={item.media}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default Intro;
