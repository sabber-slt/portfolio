import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getBlogsById } from "@/hooks/usePublic";
import { Blog } from "@/types/interfaces";
import BlurImage from "@/components/main/BlurImage";
import ImageP from "@/components/pages/ImageP";
import Content from "@/components/pages/Content";
import ImageB from "@/components/pages/ImageB";
import { NextSeo, ArticleJsonLd } from "next-seo";

const Blogs: NextPage<{ data: Blog }> = ({ data }) => {
    return (
        <>
            <NextSeo
                title={data?.title}
                description={data?.desc}
                canonical={`https://sabber.dev/blogs/${data?.id}`}
                openGraph={{
                    type: "article",
                    locale: "fa_IR",
                    url: `https://sabber.dev/blogs/${data?.id}`,
                    article: {
                        authors: ["https://medium.com/@sabber_dev"],
                        tags: ["برنامه نویسی", "طراحی وبسایت", "ساخت وب سایت"],
                    },

                    images: [
                        {
                            url: data?.media!,
                            width: 768,
                            height: 384,
                            alt: data?.title,
                            type: "image/webp",
                        },
                    ],
                    site_name: "صابر سلطانی",
                }}
            />
            <ArticleJsonLd
                type="BlogPosting"
                url={`https://www.sabber.dev/blogs/${data?.id}`}
                title={data?.title!}
                images={[data?.media!]}
                datePublished={data?.created_at!}
                authorName="صابر سلطانی"
                description={data?.desc as string}
            />

            <ImageP src={data?.media} alt={data?.title} />

            <Content title={data?.title} content={data?.content} />
            <ImageB src={data?.media1!} alt={data?.title1!} />

            <Content title={data?.title1!} content={data?.content1!} />
            <Content title={data?.title2!} content={data?.content2!} />
            {data.media2 !== null && data.media2 !== "" && (
                <ImageB src={data?.media2!} alt={data?.title2!} />
            )}
            {data.content3 !== null && data.content3 !== "" && (
                <Content title={data?.title3!} content={data?.content3!} />
            )}
        </>
    );
};

export default Blogs;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = parseInt(ctx.params?.id as string);
    const data = await getBlogsById(id);
    return {
        props: {
            data,
        },
    };
};
