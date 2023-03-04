import React from "react";

type Props = {
    title: string;
    content: string;
};

const Content = (props: Props) => {
    return (
        <div>
            <h1 className="font-bold text-blue text-2xl lg:mt-8 p-4 lg:p-0">
                {props.title}
            </h1>
            <p className="lg:w-[60vw] text-lg px-4 lg:px-0 whitespace-pre-line lg:pt-4">
                {props.content}
            </p>
        </div>
    );
};

export default Content;
