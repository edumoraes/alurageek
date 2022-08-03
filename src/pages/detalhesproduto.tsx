import HeroProduct from "../components/template/HeroProduct";
import {IconArrowSmRight} from "../components/atoms/icons";
import CardProduto from "../components/template/CardProduto";
import ListaProdutos from "../components/template/ListaProdutos";
import Layout from "../components/template/Layout";

export default function detalhesproduto() {
    return(
        <Layout>
            <div className={`container mx-auto min-w-[328px] max-w-[1136px] px-4 md:px-8\``}>
                <HeroProduct
                    url={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHz7hpaHgVEqG8H2RCfoizDrCMQjkjxSFsSWzwGdg8I3qVtpO2LLRuOIojjBuV5qNlMoTROvcXwtQgBQ0ccXmsMMzGaWu31HAwB6QnXvCYdCgvlkLlwVD4lw&usqp=CAE"}
                    nome={"Baby Yoda"}
                    preco={"R$53,89"}
                >
                    <ListaProdutos icone={IconArrowSmRight} titulo={`Star Wars`}>
                        <CardProduto url="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHz7hpaHgVEqG8H2RCfoizDrCMQjkjxSFsSWzwGdg8I3qVtpO2LLRuOIojjBuV5qNlMoTROvcXwtQgBQ0ccXmsMMzGaWu31HAwB6QnXvCYdCgvlkLlwVD4lw&usqp=CAE" />
                        <CardProduto url={`https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThNhlggf5v9zUz1hrPX_L2rHghinZQjwH_zgrxxwyNMk4JkrglanVa0pTxeoIz6InaMqL1cRTGOXr4GoA6D5Gz2u4mPlEREF0QSJl0Iws0wnqiecqDW0pmbA&usqp=CAE`} />
                        <CardProduto url={`https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQldHa1eJ1CxwJVCACH2k9Zgs1bI2wDfFN8PWdNCNyIpbIWl1ErfyOn8Z603al9G3_zGQLMYfC-AxMCLoqD_ESARG6EuwtNA_5HwGC3DHPOn7YuxGMbdbl&usqp=CAE`} />
                        <CardProduto url={`https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9fs859TiHOsm7SE4nhSowGuSvJy2vgiqNQcEX062-9K3tG3R7xtMDmGFNqBCW4171Gba3K755r76-l-TYieftJfRXFSXqYK_DpdKg6jXi9gxR5iQ2yeJY&usqp=CAE`} />
                    </ListaProdutos>
                </HeroProduct>
            </div>
        </Layout>
    )
}