import CardProduto from "./CardProduto";
import Link from "next/link";


interface ListaProdutosProps {
    icone: any
}

export default function ListaProdutos(props: ListaProdutosProps) {
    return(
        <div className={`py-4`}>
            <div className={`flex justify-between items-center pb-4`}>
                <h3 className={`text-[1.375rem] font-bold text text-escuro-200 lg:text-[2rem]`}>Título de seção</h3>
                <div className={`flex space-x-1 items-center`}>
                    <Link href="#">
                        <a className={`text-primary-400 text-sm font-bold md:text-base`}>Ver tudo</a>
                    </Link>
                    <span>{props.icone}</span>
                </div>
            </div>
            <div className={`flex flex-wrap justify-center gap-4`}>
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </div>


        </div>
    )
}