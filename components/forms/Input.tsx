import React from "react";
import { useForm } from "react-hook-form";

type Props = {
    type: string;
    txt: string;
    register: any;
    cls: string;
};

const Input = (props: Props) => {
    const { register } = useForm();
    return (
        <div className="flex flex-col items-start font-bold">
            <label htmlFor="" className="text-lg">
                {props.txt}
            </label>
            <input
                type={props.type}
                {...props.register}
                className={`${props.cls} rounded-md pr-3`}
            />
        </div>
    );
};

export default Input;
