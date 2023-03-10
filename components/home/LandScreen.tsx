import React from "react";
import BlurImage from "../main/BlurImage";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Social from "../main/Social";

const LandScreen = () => {
    const [text] = useTypewriter({
        words: ["Full-Stack Developer", "Typescript", "Docker"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center">
            <div className="relative z-40 w-full lg:w-1/2 h-[45vh] lg:h-full vstack justify-center p-5">
                <h1 className="mb-2 font-bold text-xl text-blue">
                    <Cursor />
                    {text}
                </h1>
                <h2 className="my-3 text-center text-xl lg:text-2xl font-bold z-50 leading-10">
                    به وب سایت صابر سلطانی کارشناس و برنامه نویس کامپیوتر خوش
                    آمدید
                </h2>
                <div className="w-full center">
                    <Social color="text-blue" />
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-1/2 lg:h-full center ">
                <BlurImage
                    src="/pics/man1.png"
                    alt="صابر سلطانی"
                    pri={true}
                    size="100%"
                    cls="w-72 lg:w-96 h-96 lg:h-[80vh]"
                />
            </div>
        </div>
    );
};

export default LandScreen;
