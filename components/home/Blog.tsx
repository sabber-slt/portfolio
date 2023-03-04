import React, { FC } from "react";
import Card from "../main/Card";
import { Main } from "@/types/interfaces";

const Blog: FC<{ data: Main[] }> = ({ data }) => {
    return (
        <div className="relative w-full center mt-16">
            <div className=" w-fit grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20 items-center justify-center">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        href={`/blogs/${item.id}`}
                        image={item.media}
                        title={item.title}
                        content={item.content.slice(0, 200)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;
