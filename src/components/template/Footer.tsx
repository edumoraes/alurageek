import Logo from "./Logo";
import Menuitem from "./Menuitem";

export default function Footer() {
    return(
        <footer className={`bg-primary-100 py-4`}>
            <nav className={`flex flex-col items-center gap-4`}>
                <Logo largura={172} altura={50} />
                <div>
                    <ul className={`flex flex-col text-center text-base font-medium text-escuro-200 gap-4`}>
                        <Menuitem texto={`Quem somos nós`} />
                        <Menuitem texto={`Política de privacidade`} />
                        <Menuitem texto={`Programa de fidelidade`} />
                        <Menuitem texto={`Nossas lojas`} />
                        <Menuitem texto={`Quero ser franqueado`} />
                        <Menuitem texto={`Anuncie aqui`} />
                    </ul>
                </div>
            </nav>
            <form action="">
                <label htmlFor="first">Nome:</label>
                <input type="text" id="first" name="first"/>
                <label  htmlFor="last">Escreva sua mensagem:</label>
                <input type="text" id="last" name="last"/>
                <button type="submit">Submit</button>
            </form>
            <article>
                <span>Desenvolvido por Eduardo de Moraes</span>
                <span>2022</span>
            </article>
        </footer>
    )
}