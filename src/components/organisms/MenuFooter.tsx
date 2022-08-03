import Logo from "../template/Logo";
import MenuItem from "../molecules/MenuItem";

export default function MenuFooter(){
    return(
        <nav className={`flex flex-col items-center gap-4 px-4 md:px-8 md:items-start lg:flex-row lg:gap-28`}>
            <Logo largura={172} altura={50}/>
            <div>
                <ul className={`flex flex-col text-center text-base font-medium text-escuro-200 gap-4 md:text-left`}>
                    <MenuItem texto={`Quem somos nós`} />
                    <MenuItem texto={`Política de privacidade`} />
                    <MenuItem texto={`Programa de fidelidade`} />
                    <MenuItem texto={`Nossas lojas`} />
                    <MenuItem texto={`Quero ser franqueado`} />
                    <MenuItem texto={`Anuncie aqui`} />
                </ul>
            </div>
        </nav>
    )
}