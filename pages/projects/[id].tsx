import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getProjectsById } from "@/hooks/usePublic";
import { Project } from "@/types/interfaces";
import Link from "next/link";
import { NextSeo } from "next-seo";
import ImageP from "@/components/pages/ImageP";
import Content from "@/components/pages/Content";
import ImageB from "@/components/pages/ImageB";

const Project: NextPage<{ data: Project }> = ({ data }) => {
    return (
        <>
            <NextSeo
                title={data?.title}
                description={data?.desc}
                canonical={`https://www.sabber.dev/projects/${data?.id}`}
            />

            <ImageP src={data?.media!} alt={data?.title!} />

            <Content title={data?.title} content={data?.content} />

            <ImageB src={data?.media1!} alt={data?.title1!} />
            <Content title={data?.title1!} content={data?.content1} />
            <Content title={data?.title2!} content={data?.content2!} />

            {data?.web_url !== null && data?.web_url !== "" && (
                <Link
                    href={data.web_url!}
                    className=" w-36 h-10 bg-blue center text-white rounded-lg mt-4"
                >
                    لینک وب سایت
                </Link>
            )}
            {data?.app_url !== null && data?.web_url !== "" && (
                <Link
                    href={data.app_url!}
                    className=" w-36 h-10 bg-blue center text-white rounded-lg mt-4"
                >
                    دانلود اپلیکیشن
                </Link>
            )}
        </>
    );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = parseInt(ctx.params?.id as string);
    const data = await getProjectsById(id);
    return {
        props: {
            data,
        },
    };
};
