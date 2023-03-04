import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";

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
                title="صابر سلطانی ✌"
                description="صابر سلطانی برنامه نویسی و کارشناس نرم افزار ، طراح و توسعه دهنده سرور، وب سایت ، اپلیکیشن و تکنولوژی های روز دنیا"
                canonical="https://www.sabber.dev/"
                openGraph={{
                    type: "website",
                    locale: "fa_IR",
                    url: "https://www.sabber.dev/",
                    siteName: "صابر سلطانی",
                    images: [
                        {
                            url: "https://www.sabber.dev/profile.png",
                            width: 1920,
                            height: 1080,
                            alt: "صابر سلطانی",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@sadratech",
                    site: "@sadratech",
                    cardType: "summary_large_image",
                }}
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: "https://www.sabber.dev/logo.ico",
                    },
                ]}
            />
            <GoogleAnalytics trackPageViews />
            <main className={inter.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </>
    );
}
