import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import Link from "next/link";
import {useState} from "react";
import TextInput from "../atoms/TextInput";

interface TextFieldProps {
    label: string
    type: string
    id: string
    required: boolean
    minlength?: number
    maxlength?: number
    pattern?: string
}

export default function TextField(props: TextFieldProps) {

    const [tamanhoLabel, setTamanhoLabel] = useState("text-base");

    const diminuiLabel = (ev: any) => {
        if(ev.target.value === "") {
            setTamanhoLabel("text-base");
        } else {
            setTamanhoLabel("text-[0.75rem]");
        }
    }

    return(
        <>
            <div className={`relative`}>
                <label htmlFor={props.id} className={`absolute top-2 left-3 ${tamanhoLabel} font-base text-escuro-100`}
                >{props.label}</label>

                <TextInput id={props.id} onChange={diminuiLabel} type={props.type} required={props.required} pattern={props.pattern} maxlength={props.maxlength} minlength={props.minlength} />

            </div>

        </>
    )
}