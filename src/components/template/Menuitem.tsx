import Link from 'next/link'

interface PropsMenuitem {
    url?: string
    texto: string
    icone?: any
    className?: string
    onClik?: (evento: any) => {}
}
export default function Menuitem(props: PropsMenuitem) {
    
    const renderizarLink = () => {
        return (
            <a className={`${props.className}`}>
                {props.icone}
                <span>{props.texto}</span>
            </a>
        )
    }

    return (    
        
        <li onClick={props.onClik} className={`cursor-pointer`}>
            {props.url ? (
            <Link href={props.url}>
                {renderizarLink()}
            </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )

}