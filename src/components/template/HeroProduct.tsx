interface PropsPaginaProduto{
    url: string
    nome: string
    preco: string
    children: any
}

export default function HeroProduct(props: PropsPaginaProduto) {
    return(
        <>
            <div className={`flex flex-col items-center space-y-4 md:flex-row`}>
                <div className={`flex-1`}>
                    <img src={props.url} alt={props.nome}
                         className={`w-full aspect-[360/192] md:aspect-[254/157] lg:aspect-[560/403] object-contain object-center`}
                    />
                </div>
                <div className={`flex flex-col flex-1 space-y-2`}>
                    <h1 className={`font-medium text-escuro-200 text-[1.375rem] lg:text-[3.25rem]`}>{props.nome}</h1>
                    <span className={`text-base font-bold text-escuro-200`}>{props.preco}</span>
                    <p className={`text-escuro-200 text-sm lg:text-base`}>Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam.</p>
                </div>
            </div>

            <div>
                {props.children}
            </div>
        </>
    )
}