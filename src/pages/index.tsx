import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from "../components/template/Layout";

import {IconArrowSmRight} from "../components/atoms/icons";

import Banner from "../components/organisms/Banner";
import ListaProdutos from "../components/template/ListaProdutos";
import CardProduto from "../components/template/CardProduto";
import SectionStarWars from "../components/template/SectionStarWars";
import SectionDiversos from "../components/template/SectionDiversos";
import SectionConsoles from "../components/template/SectionConsoles";


const Home: NextPage = () => {

    const bannerProps = {
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Dezembro Promocional",
        subtitle: "Produtos selecionados com 33% de desconto",
        btnName: "Ver Consoles",
        btnType: "a-primary",
        url: "#consoles"
    }

  return (
    <div>

        <Head>
            <title>AluraGeek</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/Projects/nextjs/alurageek/public/favicon.ico" />
        </Head>

        <Layout >

          <Banner 
          url={bannerProps.url} 
          btnType={bannerProps.btnType} 
          btnName={bannerProps.btnName} 
          img={bannerProps.img} 
          subtitle={bannerProps.subtitle} 
          title={bannerProps.title} />

            <div className={`container mx-auto min-w-[328px] max-w-[1136px] px-4 md:px-8`}>

                <SectionStarWars />

                <SectionDiversos />

                <SectionConsoles />

            </div>

        </Layout>


    </div>
  )
}

export default Home
