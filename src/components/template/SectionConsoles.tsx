import ListaProdutos from "./ListaProdutos";
import {IconArrowSmRight} from "../atoms/icons";
import CardProduto from "./CardProduto";

export default function SectionConsoles() {
    const produtosConsoles = [
        {
            id: 9,
            nomeProduto: "Baby Yoda",
            preco: "R$ 46,87",
            url: "https://i.promobit.com.br/268/145188931616505394841644644791.png"
        },
        {
            id: 10,
            nomeProduto: "Caneca R2D2",
            preco: "R$ 50,00",
            url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFt-P8drdC2Byk2m2H9SxsiiQV30p195kJyYf68dHV-lCS-ge7Il5XhSsBMqazhzTqNfR2xXmNIDds-x2SoWjL368RixE70IYHD15pQRQR4D1KTjHwRHfiiw&usqp=CAE"
        },
        {
            id: 11,
            nomeProduto: "Star Wars Card",
            preco: "R$ 68,00",
            url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUoD6USklIoOX0NmqNaFlJ446kdsv8fOAJqf8406VUUt01daXNoFTblq053NW-BfrvWtMatH1RPKnbeIjw1pKVBrny67UZiZVIs50e8tsRl84ThzLh1rva&usqp=CAE"
        },
        {
            id: 12,
            nomeProduto: "Coco Star Wars",
            preco: "R$ 32,00",
            url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVnJE-Sai3x9IVOqZB2zI6XC9UripZ-PRjMIVO44DJXhLklYf9sez-caivsG14rc325Qnv-yXtuQ350pY_45yJwKZWPLe9eS7pLidecyirVXCS0--pP9aa&usqp=CAE"
        },
    ]
    return(
        <section id={`consoles`}>
            <ListaProdutos icone={IconArrowSmRight} titulo={`Consoles`}>
                {produtosConsoles.map((value, index, array) => {
                    return(
                        <>
                            <CardProduto
                                url={value.url}
                                nomeProduto={value.nomeProduto}
                                preco={value.preco}
                                key={value.id}
                            />
                        </>
                    )
                })}
            </ListaProdutos>
        </section>
    )
}