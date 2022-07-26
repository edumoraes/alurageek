import Link from "next/link";
export default function CardProduto() {
    return(
        <div className={`flex flex-col w-[156px] md:w-[164px] lg:w-[176px] bg-primary-200`}>
            <img src="https://i.promobit.com.br/268/145188931616505394841644644791.png" alt="PlayStation 5"
                className={`w-full aspect-[156/174] md:aspect-[164/174] lg:aspect-[176/174] object-cover object-center`}
            />
            <div className={`flex flex-col`}>
                <span className={`text-sm`}>Nome do Produto</span>
                <span className={`text-base font-bold text-escuro-200`}>R$ 10,20</span>
                <Link href="#">
                    <a className={`text-sm font-bold text-primary-400`}>
                        Ver produto
                    </a>
                </Link>
            </div>
        </div>
    )
}