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
            <div className="relative z-40 w-full lg:w-1/2 h-1/2 lg:h-full vstack justify-center p-5">
                <p className="mb-2 font-bold text-lg text-blue">
                    <Cursor />
                    {text}
                </p>
                <h1 className="my-5 text-center text-2xl font-bold z-50">
                    به وبسایت صابر سلطانی برنامه نویس Full-Stack خوش آمدید
                </h1>
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
                    cls="w-80 lg:w-96 h-[50vh] lg:h-[80vh]"
                />
            </div>
        </div>
    );
};

export default LandScreen;
