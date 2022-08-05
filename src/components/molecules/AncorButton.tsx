import Link from "next/link";

interface ButtonProps{
    name: string
    href: string
    btnType?: string
}

export default function AncorButton(props: ButtonProps) {

    return (
        <>
            {
                props.btnType === "secondary" ?
                    (<div><Link href={props.href}><a className={`btn-bare`}>{props.name}</a></Link></div>) :
                    (<div><Link href={props.href}><a className={`btn-primary`}>{props.name}</a></Link></div>)
            }

        </>
    )
}
            {/*{if (props.btnType === "secondary") {
                return (
                    <div>
                        <Link href={props.href}>
                            <a className={`btn-bare`}>
                                {props.name}
                            </a>
                        </Link>
                    </div>
                )
            } if (props.btnType === "primary" || props.btnType === "") {
                return(
                    <div>
                        <Link href={props.href}>
                            <a className={`btn-primary`}>
                                {props.name}
                            </a>
                        </Link>
                    </div>
                )
            }
    }
}*/}

