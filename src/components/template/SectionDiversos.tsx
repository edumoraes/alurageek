import ListaProdutos from "./ListaProdutos";
import {IconArrowSmRight} from "../atoms/icons";
import CardProduto from "./CardProduto";

export default function SectionDiversos() {
    const produtosDiversos = [
        {
            id: 5,
            nomeProduto: "Baby Yoda",
            preco: "R$ 46,87",
            url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7I12WJ4STjAMNmmzCbsRRDtrFwlXNzu1PqnI8Zi1mgBXUr0lpdENQ_Fi8R8EbpdcyMpWcKQwCJ_LnAnAfB0-9PJAbAaQDvoaI2INjlUUzOH_oKHASVlfR&usqp=CAE"
        },
        {
            id: 6,
            nomeProduto: "Caneca R2D2",
            preco: "R$ 50,00",
            url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKb8D0d1c-BeO16yn3kEuFuaEMr4xgNNZx-Qss3yeg9p72CxOS7NtEhqgDjsNOjfoKYYTsWQ3GKy_VVJJAGIVRCdv9zOMzh8x_JBuu2BynHk5jzB4c9KDa&usqp=CAE"
        },
        {
            id: 7,
            nomeProduto: "Star Wars Card",
            preco: "R$ 68,00",
            url: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFqy8b9hPyYdmyrY3rbCkBA6c2b-SPFOkeKxunblS6PTTnd69MiYQE2cO7fUsCmOQJSesAxhOlDaH6w70uWFfqcF0zHz1IZ8go2EZ-gnJFhCpOY_OolmIA&usqp=CAE"
        },
        {
            id: 8,
            nomeProduto: "Coco Star Wars",
            preco: "R$ 32,00",
            url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBsyirSLXs99a30pR3v7ftsrxiYeJ2weMDki27fdpH0p48VBMwzsbSuuOSSd9vSXb6nDeTtwrr-jpjGDmhZOo5nCaXXM5WvpC4D0cbaWSHpE6M4vW-VPJt&usqp=CAE"
        },
    ]

    return(
        <section id={`diversos`}>
            <ListaProdutos icone={IconArrowSmRight} titulo={`Diversos`}>
                {produtosDiversos.map((value, index, array) => {
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