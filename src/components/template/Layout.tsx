import Navbar from './Navbar'
import Conteudo from './Conteudo'
import Banner from "./Banner";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <Navbar />
            <Conteudo>
                <Banner />
                {props.children}
            </Conteudo>
        </div>
    )
}