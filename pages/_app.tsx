import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { useState } from "react";

import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";

const inter = localFont({
    src: [
        {
            path: "../public/fonts/Iran.ttf",
            style: "normal",
        },
        {
            path: "../public/fonts/IranBold.woff2",
            style: "bold",
            weight: "700",
        },
    ],
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title="صابر سلطانی | برنامه نویس کامپیوتر"
                description="طراحی و ساخت انواع وبسایت و اپلیکیشن های موبایل و دسکتاپ با استفاده از جدید ترین تکنولوژی های روز دنیا توسط مهندس کامپیوتر"
                canonical="https://www.sabber.dev/"
                openGraph={{
                    type: "website",
                    locale: "fa_IR",
                    url: "https://www.sabber.dev/",
                    siteName: "صابر سلطانی",
                    images: [
                        {
                            url: "https://www.sabber.dev/profile.png",
                            width: 446,
                            height: 747,
                            alt: "صابر سلطانی",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@sltsabber",
                    site: "@sltsabber",
                    cardType: "summary_large_image",
                }}
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: "https://www.sabber.dev/logo.ico",
                    },
                ]}
            />

            <main className={inter.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </>
    );
}
