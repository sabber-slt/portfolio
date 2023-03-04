import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
    {
        id: 1,
        title: "Avacado",
        media: "https://res.cloudinary.com/dh6sxfevk/image/upload/v1665300549/266e92054f116c0a2c4e05a76be04063_bzzxl0.jpg",
    },
    {
        id: 4,
        title: "Ekska",
        media: "https://res.cloudinary.com/dh6sxfevk/image/upload/v1672042001/austin-distel-wawEfYdpkag-unsplash_veej91_dtqi9u.webp",
    },
    {
        id: 3,
        title: "Blade Cal",
        media: "https://res.cloudinary.com/dupfwlkgb/image/upload/v1676810847/b912c62622fcb5790597b99ca3990c04_uxyeii.jpg",
    },
    {
        id: 2,
        title: "TalkBox",
        media: "https://res.cloudinary.com/dupfwlkgb/image/upload/v1673092270/pexels-nappy-935979_1_ss5btn.jpg",
    },
];
type Props = {
    media: string;
    title: string;
    cls: string;
    id: string;
};
const Item = (props: Props) => {
    return (
        <Link href={`/projects/${props.id}`}>
            <div
                className={`relative ${props.cls} vstack justify-center rounded-lg overflow-hidden bg-blue shadow-xl hov`}
            >
                <Image
                    src={props.media}
                    alt={props.title}
                    fill
                    priority
                    sizes="70%"
                    style={{ objectFit: "cover", opacity: 0.8 }}
                />
                <h1 className="z-40 text-white font-bold text-xl lg:text-4xl">
                    {props.title}
                </h1>
            </div>
        </Link>
    );
};

const Projects = () => {
    return (
        <div className="w-full vstack mt-16">
            <Item
                id="4"
                media={data[1].media}
                title={data[1].title}
                cls="w-96 lg:w-[70vw] h-40 lg:h-80"
            />
            <div className="w-full lg:w-[70vw] hstack justify-around mt-5">
                <Item
                    id="1"
                    media={data[0].media}
                    title={data[0].title}
                    cls="w-44 lg:w-96 h-56 lg:h-96"
                />
                <Item
                    id="3"
                    media={data[2].media}
                    title={data[2].title}
                    cls="w-44 lg:w-[40vw] h-80 lg:mr-3"
                />
            </div>
            <Item
                id="2"
                media={data[3].media}
                title={data[3].title}
                cls="w-96 lg:w-[70vw] h-40 lg:h-80 mt-5"
            />
        </div>
    );
};

export default Projects;
