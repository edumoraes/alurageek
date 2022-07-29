import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
    largura: number
    altura: number
    url?: string
}


export default function Logo(props: LogoProps) {
    return (
        <Link href={props.url ?? "/"}>
            <a>
                <Image
                    src="/alura-geek.svg"
                    alt="AluraGeek"
                    width={props.largura}
                    height={props.altura}
                    className={`w-172`}
                />
            </a>
        </Link>
    )
}