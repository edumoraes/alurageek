import ListaProdutos from "./ListaProdutos";
import {IconArrowSmRight} from "../atoms/icons";
import CardProduto from "./CardProduto";

export default function SectionStarWars() {
    const produtosStarWars = [
        {
            id: 1,
            nomeProduto: "Baby Yoda",
            preco: "R$ 46,87",
            url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHz7hpaHgVEqG8H2RCfoizDrCMQjkjxSFsSWzwGdg8I3qVtpO2LLRuOIojjBuV5qNlMoTROvcXwtQgBQ0ccXmsMMzGaWu31HAwB6QnXvCYdCgvlkLlwVD4lw&usqp=CAE"
        },
        {
            id: 2,
            nomeProduto: "Caneca R2D2",
            preco: "R$ 50,00",
            url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThNhlggf5v9zUz1hrPX_L2rHghinZQjwH_zgrxxwyNMk4JkrglanVa0pTxeoIz6InaMqL1cRTGOXr4GoA6D5Gz2u4mPlEREF0QSJl0Iws0wnqiecqDW0pmbA&usqp=CAE"
        },
        {
            id: 3,
            nomeProduto: "Star Wars Card",
            preco: "R$ 68,00",
            url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQldHa1eJ1CxwJVCACH2k9Zgs1bI2wDfFN8PWdNCNyIpbIWl1ErfyOn8Z603al9G3_zGQLMYfC-AxMCLoqD_ESARG6EuwtNA_5HwGC3DHPOn7YuxGMbdbl&usqp=CAE"
        },
        {
            id: 4,
            nomeProduto: "Coco Star Wars",
            preco: "R$ 32,00",
            url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9fs859TiHOsm7SE4nhSowGuSvJy2vgiqNQcEX062-9K3tG3R7xtMDmGFNqBCW4171Gba3K755r76-l-TYieftJfRXFSXqYK_DpdKg6jXi9gxR5iQ2yeJY&usqp=CAE"
        },
    ]
    return(
        <section id={`star-wars`}>
            <ListaProdutos icone={IconArrowSmRight} titulo={`Star Wars`}>
                {produtosStarWars.map((value, index, array) => {
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
