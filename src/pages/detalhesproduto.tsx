import HeroProduct from "../components/template/HeroProduct";
import {IconArrowSmRight} from "../components/atoms/icons";
import CardProduto from "../components/template/CardProduto";
import ListaProdutos from "../components/template/ListaProdutos";
import Layout from "../components/template/Layout";
import SectionStarWars from "../components/template/SectionStarWars";

export default function detalhesproduto() {
    return(
        <Layout>
            <div className={`container mx-auto min-w-[328px] max-w-[1136px] px-4 md:px-8\``}>
                <HeroProduct
                    url={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHz7hpaHgVEqG8H2RCfoizDrCMQjkjxSFsSWzwGdg8I3qVtpO2LLRuOIojjBuV5qNlMoTROvcXwtQgBQ0ccXmsMMzGaWu31HAwB6QnXvCYdCgvlkLlwVD4lw&usqp=CAE"}
                    nome={"Baby Yoda"}
                    preco={"R$53,89"}
                >
                    <SectionStarWars />
                </HeroProduct>
            </div>
        </Layout>
    )
}