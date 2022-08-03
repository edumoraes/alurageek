import Link from "next/link";

interface ButtonProps{
    name: string
    href?: string
    btnType?: string
    onClick?: any
}

export default function Button(props: ButtonProps) {
    if (props.btnType === "a-secondary") {
        return(
            <div>
            <Link href={props.href}>
                <a className={`btn-bare`}>
                    {props.name}
                </a>
            </Link>
            </div>
        )
    } if (props.btnType === "a-primary") {
        return(
            <div>
            <Link href={props.href}>
                <a className={`btn-primary`}>
                    {props.name}
                </a>
            </Link>
            </div>
        )
    } if (props.btnType === "btn-secondary") {
        return(
            <>
            <button onClick={props.onClick} className={`btn-bare`}>
                {props.name}
            </button>
            </>
        )
    } if (props.btnType === "btn-primary") {
        return(
            <>
            <button onClick={props.onClick} className={`btn-primary`}>
                {props.name}
            </button>
            </>
        )
    }
}