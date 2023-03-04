import React from "react";
import BlurImage from "../main/BlurImage";

type Props = {
    src: string;
    alt: string;
};

const ImageP = (props: Props) => {
    return (
        <div className="lg:mt-10 lg:rounded-xl overflow-hidden lg:shadow-xl">
            <BlurImage
                src={props.src}
                alt={props.alt}
                size="80%"
                pri={true}
                cls="w-[100vw] lg:w-[60vw] h-[60vh] lg:h-[70vh]"
            />
        </div>
    );
};

export default ImageP;
