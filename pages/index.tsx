import { Suspense } from "react";
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Intro from "@/components/home/Intro";
import LandScreen from "@/components/home/LandScreen";
import Projects from "@/components/home/Projects";
import { Main } from "@/types/interfaces";
import { GetServerSideProps, NextPage } from "next";

export interface MainProps {
    data: {
        json: {
            main: Main[];
            blog: Main[];
        };
    };
}

const Home: NextPage<MainProps> = (data) => {
    if (!data) {
        return null;
    }
    const info = data.data.json;

    return (
        <Suspense fallback={null}>
            <LandScreen />
            <Intro data={info.main.slice(0, 3)!} />
            <About />
            <Projects />
            <Blog data={info.blog!} />
        </Suspense>
    );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.GraphqlAPI}/api/rest/mains`);
    const json = await res.json();
    return {
        props: {
            data: { json },
        },
    };
};
