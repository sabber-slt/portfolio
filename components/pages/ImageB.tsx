import React from "react";
import BlurImage from "../main/BlurImage";

type Props = {
    src: string;
    alt: string;
};

const ImageB = (props: Props) => {
    return (
        <BlurImage
            src={props.src}
            alt={props.alt}
            size="80%"
            pri={true}
            cls="w-96 lg:w-[50vw] h-96 mt-5 rounded-lg overflow-hidden"
        />
    );
};

export default ImageB;
