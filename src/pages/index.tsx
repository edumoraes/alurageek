import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from "../components/template/Footer";

import {IconeArrowSmRight} from "../components/icons";

import styles from '../styles/Home.module.scss'

import Navbar from "../components/template/Navbar";
import Banner from "../components/template/Banner";
import Logo from "../components/template/Logo";
import Link from "next/link";
import ListaProdutos from "../components/template/ListaProdutos";


const Home: NextPage = () => {
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/Projects/nextjs/alurageek/public/favicon.ico" />
        </Head>
        <Navbar />

        <main>
            <Banner></Banner>
            <div className={`container mx-auto min-w-[328px] max-w-[1136px] px-4 md:px-8`}>
                <ListaProdutos icone={IconeArrowSmRight} />
                <ListaProdutos icone={IconeArrowSmRight} />
                <ListaProdutos icone={IconeArrowSmRight} />
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
