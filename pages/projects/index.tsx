import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ProjectProps } from "@/types/interfaces";
import BlurImage from "@/components/main/BlurImage";
import Link from "next/link";
import ImageP from "@/components/pages/ImageP";

const Project: NextPage<ProjectProps> = (data) => {
    return (
        <>
            <NextSeo
                title="صابر سلطانی | پروژه های موفق"
                description="با تجربه کار در تیم های مطرح و انجام پروژه های برنامه نویسی مختلف هم اکنون اپلیکیشن و وبسایت های گوناگونی را در کارنامه خود دارا می باشم"
                canonical="https://www.sabber.dev/projects"
            />

            <ImageP
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1666556168/pexels-neo-2653362_iibgnn.jpg"
                alt="پروژه های برنامه نویسی"
            />
            <div className="w-fit grid grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center pt-16">
                {data?.data.json.project.map((item) => (
                    <Link
                        href={`/projects/${item.id}`}
                        key={item.id}
                        className="relative w-40 h-52 vstack items-center justify-center rounded-lg overflow-auto"
                    >
                        <BlurImage
                            src={item.media}
                            alt={item.title}
                            pri={false}
                            size="60%"
                            cls="w-40 h-52"
                        />
                        <div className="absolute w-40 h-52 center text-center text-white bg-blue bg-opacity-30">
                            <h1 className="">{item.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Project;
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`http://188.166.7.171:8080/api/rest/projects`);
    const json = await res.json();
    return {
        props: {
            data: { json },
        },
    };
};
