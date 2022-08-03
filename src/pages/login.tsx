import Head from "next/head";
import Layout from "../components/template/Layout";
import FormLogin from "../components/organisms/FormLogin";

export default function Login() {
    return(
        <div className={`bg-claro-200`}>
            <Head>
                <title>AluraGeek</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Projects/nextjs/alurageek/public/favicon.ico" />
            </Head>

            <Layout>
                <div className={'flex items-center min-h-[50vh]'}>
                    <FormLogin />
                </div>
            </Layout>

        </div>
    )
}