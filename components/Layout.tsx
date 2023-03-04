import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";

const Footer = dynamic(() => import("./Footer"), {
    ssr: false,
});

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    return (
        <>
            <Navbar />
            <div className="w-full vstack">{props.children}</div>
            <Footer />
        </>
    );
};

export default Layout;
