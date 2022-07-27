import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from "../components/template/Footer";

import {IconeArrowSmRight} from "../components/icons";

import Navbar from "../components/template/Navbar";
import Banner from "../components/template/Banner";
import ListaProdutos from "../components/template/ListaProdutos";
import CardProduto from "../components/template/CardProduto";


const Home: NextPage = () => {
  return (
    <div>
        <Head>
            <title>AluraGeek</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/Projects/nextjs/alurageek/public/favicon.ico" />
        </Head>
        <Navbar />

        <main>
            <Banner></Banner>
            <div className={`container mx-auto min-w-[328px] max-w-[1136px] px-4 md:px-8`}>
                <ListaProdutos icone={IconeArrowSmRight} titulo={`Star Wars`}>
                    <CardProduto url="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHz7hpaHgVEqG8H2RCfoizDrCMQjkjxSFsSWzwGdg8I3qVtpO2LLRuOIojjBuV5qNlMoTROvcXwtQgBQ0ccXmsMMzGaWu31HAwB6QnXvCYdCgvlkLlwVD4lw&usqp=CAE" />
                    <CardProduto url={`https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThNhlggf5v9zUz1hrPX_L2rHghinZQjwH_zgrxxwyNMk4JkrglanVa0pTxeoIz6InaMqL1cRTGOXr4GoA6D5Gz2u4mPlEREF0QSJl0Iws0wnqiecqDW0pmbA&usqp=CAE`} />
                    <CardProduto url={`https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQldHa1eJ1CxwJVCACH2k9Zgs1bI2wDfFN8PWdNCNyIpbIWl1ErfyOn8Z603al9G3_zGQLMYfC-AxMCLoqD_ESARG6EuwtNA_5HwGC3DHPOn7YuxGMbdbl&usqp=CAE`} />
                    <CardProduto url={`https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9fs859TiHOsm7SE4nhSowGuSvJy2vgiqNQcEX062-9K3tG3R7xtMDmGFNqBCW4171Gba3K755r76-l-TYieftJfRXFSXqYK_DpdKg6jXi9gxR5iQ2yeJY&usqp=CAE`} />
                </ListaProdutos>

                <ListaProdutos icone={IconeArrowSmRight} titulo={`Consoles`}>
                    <CardProduto url="https://i.promobit.com.br/268/145188931616505394841644644791.png" />
                    <CardProduto url={`https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFt-P8drdC2Byk2m2H9SxsiiQV30p195kJyYf68dHV-lCS-ge7Il5XhSsBMqazhzTqNfR2xXmNIDds-x2SoWjL368RixE70IYHD15pQRQR4D1KTjHwRHfiiw&usqp=CAE`} />
                    <CardProduto url={`https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUoD6USklIoOX0NmqNaFlJ446kdsv8fOAJqf8406VUUt01daXNoFTblq053NW-BfrvWtMatH1RPKnbeIjw1pKVBrny67UZiZVIs50e8tsRl84ThzLh1rva&usqp=CAE`} />
                    <CardProduto url={`https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVnJE-Sai3x9IVOqZB2zI6XC9UripZ-PRjMIVO44DJXhLklYf9sez-caivsG14rc325Qnv-yXtuQ350pY_45yJwKZWPLe9eS7pLidecyirVXCS0--pP9aa&usqp=CAE`} />
                </ListaProdutos>

                <ListaProdutos icone={IconeArrowSmRight} titulo={`Diversos`}>
                    <CardProduto url="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7I12WJ4STjAMNmmzCbsRRDtrFwlXNzu1PqnI8Zi1mgBXUr0lpdENQ_Fi8R8EbpdcyMpWcKQwCJ_LnAnAfB0-9PJAbAaQDvoaI2INjlUUzOH_oKHASVlfR&usqp=CAE" />
                    <CardProduto url={`https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKb8D0d1c-BeO16yn3kEuFuaEMr4xgNNZx-Qss3yeg9p72CxOS7NtEhqgDjsNOjfoKYYTsWQ3GKy_VVJJAGIVRCdv9zOMzh8x_JBuu2BynHk5jzB4c9KDa&usqp=CAE`} />
                    <CardProduto url={`https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFqy8b9hPyYdmyrY3rbCkBA6c2b-SPFOkeKxunblS6PTTnd69MiYQE2cO7fUsCmOQJSesAxhOlDaH6w70uWFfqcF0zHz1IZ8go2EZ-gnJFhCpOY_OolmIA&usqp=CAE`} />
                    <CardProduto url={`https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBsyirSLXs99a30pR3v7ftsrxiYeJ2weMDki27fdpH0p48VBMwzsbSuuOSSd9vSXb6nDeTtwrr-jpjGDmhZOo5nCaXXM5WvpC4D0cbaWSHpE6M4vW-VPJt&usqp=CAE`} />
                </ListaProdutos>

            </div>
        </main>
        <div className={`bg-primary-100`}>
            <Footer />
        </div>

        <div className={`flex flex-col items-center bg-claro-100 px-4 md:px-8 py-4`}>
            <span>Desenvolvido por Eduardo de Moraes</span>
            <span>2022</span>
        </div>


    </div>
  )
}

export default Home
