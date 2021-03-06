import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import Link from "next/link";
import {useState} from "react";

interface InputitemProps {
    label: string
    tipo: string
    idName: string
}

export default function Inputitem(props: InputitemProps) {

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
                <label htmlFor={props.idName} className={`absolute top-2 left-3 ${tamanhoLabel} font-base text-escuro-100`}
                >{props.label}</label>


                <input type={props.tipo} id={props.idName} name={props.idName} onChange={diminuiLabel}
                       className={`w-full pt-7 pb-2 px-3 font-normal text-base text-escuro-200 bg-claro-100 border-x-0 border-t-0 border-b-[1px] border-escuro-100 rounded-sm focus:ring-0`}
                />
            </div>

        </>
    )
}