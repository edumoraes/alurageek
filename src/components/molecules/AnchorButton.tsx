import Link from "next/link";

interface AnchorButtonProps{
    name: string
    href: string
    btnType?: string
    onClick?: any
}

const AnchorButtonSecondary = (props: AnchorButtonProps) => {
    return(
        <div><Link href={props.href}><a className={`btn-bare`}>{props.name}</a></Link></div>
    )
}

const AnchorButtonPrimary = (props: AnchorButtonProps) => {
    return(
        <div><Link href={props.href}><a className={`btn-primary`}>{props.name}</a></Link></div>
    )
}


export default function AnchorButton(props: AnchorButtonProps) {

    if (props.btnType === "anchor-secondary") {
        return <AnchorButtonSecondary name={props.name} href={props.href}/>
    }
    return <AnchorButtonPrimary name={props.name} href={props.href}/>
}

