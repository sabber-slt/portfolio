import React from "react";
import { NextPage, GetServerSideProps } from "next";
import BlurImage from "@/components/main/BlurImage";
import Link from "next/link";
import ImageP from "@/components/pages/ImageP";
import { Main } from "../../types/interfaces";
import { NextSeo } from "next-seo";

interface Props {
    json: {
        blog: Main[];
    };
}

const Blogs: NextPage<{ data: Props }> = ({ data }) => {
    return (
        <>
            <NextSeo
                title="صابر سلطانی | پروژه های موفق"
                description="با تجربه کار در تیم های مطرح و انجام پروژه های برنامه نویسی مختلف هم اکنون اپلیکیشن و وبسایت های گوناگونی را در کارنامه خود دارا می باشم"
                canonical="https://www.sabber.dev/blogs"
            />
            <>
                <ImageP
                    src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1666556168/pexels-neo-2653362_iibgnn.jpg"
                    alt="پروژه های برنامه نویسی"
                />
                <div className="w-fit grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12 items-center justify-center py-10">
                    {data?.json.blog.map((item) => (
                        <Link
                            href={`/blogs/${item.id}`}
                            key={item.id}
                            className="relative w-40 lg:w-60 h-52 lg:h-60 vstack items-center justify-center rounded-lg overflow-auto shadow-xl"
                        >
                            <BlurImage
                                src={item.media}
                                alt={item.title}
                                pri={false}
                                size="60%"
                                cls="w-40 lg:w-60 h-52 lg:h-60"
                            />
                            <div className="absolute w-40 lg:w-60 h-52 lg:h-60 center text-center text-white bg-blue bg-opacity-30">
                                <h1 className="">{item.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </>
        </>
    );
};

export default Blogs;
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.GraphqlAPI}/api/rest/blogs`);
    const json = await res.json();
    return {
        props: {
            data: { json },
        },
    };
};
