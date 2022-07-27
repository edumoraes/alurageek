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
            <div className={`flex flex-wrap justify-between gap-4`}>
                <CardProduto url="https://i.promobit.com.br/268/145188931616505394841644644791.png" />
                <CardProduto url={`https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFt-P8drdC2Byk2m2H9SxsiiQV30p195kJyYf68dHV-lCS-ge7Il5XhSsBMqazhzTqNfR2xXmNIDds-x2SoWjL368RixE70IYHD15pQRQR4D1KTjHwRHfiiw&usqp=CAE`} />
                <CardProduto url={`https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUoD6USklIoOX0NmqNaFlJ446kdsv8fOAJqf8406VUUt01daXNoFTblq053NW-BfrvWtMatH1RPKnbeIjw1pKVBrny67UZiZVIs50e8tsRl84ThzLh1rva&usqp=CAE`} />
                <CardProduto url={`https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVnJE-Sai3x9IVOqZB2zI6XC9UripZ-PRjMIVO44DJXhLklYf9sez-caivsG14rc325Qnv-yXtuQ350pY_45yJwKZWPLe9eS7pLidecyirVXCS0--pP9aa&usqp=CAE`} />
            </div>


        </div>
    )
}