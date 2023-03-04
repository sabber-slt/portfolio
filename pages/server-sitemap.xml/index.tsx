import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx: any) => {
    const res = await fetch(`${process.env.GraphqlAPI}/api/rest/blogs`);
    const data = await res.json();
    const newsSitemaps = data.blog.map((item: any) => ({
        loc: `https://www.sabber.dev/blogs/${item.id.toString()}`,
        lastmod: new Date().toISOString(),
    }));

    const fields = [...newsSitemaps];

    return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
