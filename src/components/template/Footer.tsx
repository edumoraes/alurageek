import Logo from "./Logo";
import Menuitem from "./Menuitem";
import FaleConosco from "./FaleConosco";

export default function Footer() {
    return(
        <footer className={`flex flex-col container mx-auto min-w-[328px] max-w-[1136px] bg-primary-100 gap-4 py-4 bg-primary-100
            md:flex-row lg:gap-28`
        }>
            <nav className={`flex flex-col items-center gap-4 px-4 md:px-8 md:items-start lg:flex-row lg:gap-28`}>
                <Logo largura={172} altura={50}/>
                <div>
                    <ul className={`flex flex-col text-center text-base font-medium text-escuro-200 gap-4 md:text-left`}>
                        <Menuitem texto={`Quem somos nós`} />
                        <Menuitem texto={`Política de privacidade`} />
                        <Menuitem texto={`Programa de fidelidade`} />
                        <Menuitem texto={`Nossas lojas`} />
                        <Menuitem texto={`Quero ser franqueado`} />
                        <Menuitem texto={`Anuncie aqui`} />
                    </ul>
                </div>
            </nav>
            <FaleConosco />
        </footer>
    )
}