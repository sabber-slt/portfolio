import Input from "@/components/forms/Input";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
    name: string;
    phone: string;
    age: string;
    weight: string;
};

const Register = (props: Props) => {
    const [day, setDay] = useState(1);
    const [sex, setSex] = useState("yes");
    const { register, handleSubmit } = useForm<Props>();
    const onSubmit = (data: Props) => console.log(data);
    return (
        <div className="relative w-full lg:w-[40vw] h-screen vstack justify-center">
            <Image
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1677796835/2538536cf157a6fe88464fda9945c6c3_cotdwp.png"
                alt="banoome"
                fill
                sizes="100%"
                priority={true}
                style={{ objectFit: "cover" }}
            />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-96 py-5 bg-white bg-opacity-75 rounded-lg vstack space-y-5 z-40"
            >
                <Input
                    txt="نام"
                    register={register("name")}
                    type="text"
                    cls="bg-neutral200 w-64 h-12"
                />
                <Input
                    txt="شماره تماس"
                    register={register("phone")}
                    type="number"
                    cls="bg-neutral200 w-64 h-12"
                />
                <div className="w-72 hstack justify-around ">
                    <Input
                        txt="سن"
                        register={register("age")}
                        type="number"
                        cls="bg-neutral200 w-20 h-12"
                    />
                    <Input
                        txt="وزن"
                        register={register("weight")}
                        type="number"
                        cls="bg-neutral200 w-20 h-12"
                    />
                </div>
                <div className="vstack">
                    <p>معمولا طول دوره عادت ماهیانه شما چقدر است؟</p>
                    <div className="w-80 hstack justify-center mt-3">
                        <button className="text-white bg-pink w-8 h-8 rounded-md shadow-lg">
                            +
                        </button>
                        <p className="text-pink text-4xl mx-6">{day}</p>
                        <button className="text-white bg-pink w-8 h-8 rounded-md shadow-lg">
                            -
                        </button>
                    </div>
                </div>
                <div className="vstack">
                    <p>آیا رابطه جنسی فعال دارید؟</p>
                    <div className="w-40 hstack justify-around mt-3">
                        <button
                            aria-label="yes"
                            onClick={() => setSex("yes")}
                            className={`${
                                sex === "yes" ? "text-white" : "text-pink"
                            } bg-pink ${
                                sex === "yes" ? "bg-pink" : "bg-neutral200"
                            } w-14 h-8 rounded-md shadow-lg`}
                        >
                            بله
                        </button>
                        <button
                            aria-label="no"
                            onClick={() => setSex("no")}
                            className={`${
                                sex === "no" ? "text-white" : "text-pink"
                            } bg-pink ${
                                sex === "no" ? "bg-pink" : "bg-neutral200"
                            } w-14 h-8 rounded-md shadow-lg`}
                        >
                            خیر
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-44 h-14 bg-pink text-white font-bold rounded-md mt-5"
                    >
                        ثبت نام
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
