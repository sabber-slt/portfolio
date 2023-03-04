import React from "react";
import BlurImage from "../main/BlurImage";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row items-center justify-between bg-blue">
            <h1 className="hidden">برنامه نویسی و ساخت اپلیکیشن و وب سایت</h1>
            <div className="w-full lg:w-[50vw] lg:h-[50vh] flex flex-col justify-center text-white px-5 py-12 lg:py-0">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "linear", duration: 1, delay: 0.8 }}
                    className="pt-3 lg:text-xl"
                >
                    به عنوان برنامه نویس در سالیان گذشته توانسته ام پلتفرم های
                    مختلفی در حوزه های گوناگون از شرکتی و فروشگاهی گرفته تا
                    پلتفرم های شبکه های اجتماعی در کارنامه خود به جای بگذارم و
                    در این مسیر با تیم های مختلفی از جمله شرکت های ایرانی دیجی
                    کالا و نت بار و شرکت ترکیه ای Ekska و شرکت کانادایی Talkbox
                    همکاری کرده ام. در این مسیر به اشتیاق من به تکنولوژی و
                    برنامه نویسی همواره به طور وصف ناپذیری افزوده شده و اعتقاد و
                    خط فکری خود را همواره بر یادگیری و آموزش هر روزه گذاشته ام و
                    در کنار تیم و دوستان خوبم به ادامه کشف این دنیای جذاب ادامه
                    خواهم داد.
                </motion.p>
            </div>
            <BlurImage
                src="/pics/man2.png"
                alt="asdasd"
                size="100%"
                pri={false}
                cls="w-full lg:w-[40vw] h-[60vh] lg:h-[100vh]"
            />
        </div>
    );
};

export default About;
