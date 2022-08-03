import Logo from '../template/Logo'
import Pesquisa from '../molecules/Pesquisa'
import {IconSearch} from "../atoms/icons";
import Button from "../molecules/Button";

export default function Header() {
    return (
        <header className="mb-2 py-2 px-4">
            <nav className={`flex items-center container mx-auto min-w-[328px] max-w-[1136px] px-4 md:px-8`}>
                <div className="flex h-full items-center">
                    <Logo largura={100} altura={28}/>
                </div>
                <div className={`flex pl-3 items-center space-x-3 flex-row-reverse flex-grow sm:flex-row sm:justify-between`}>
                    <Pesquisa icone={IconSearch} />

                    <Button btnType={`a-secondary`} name={`Login`} href={`/login`} />
                </div>
            </nav>
        </header>
    )
}