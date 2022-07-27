import Logo from './Logo'
import Pesquisa from './Pesquisa'
import {IconeSearch} from "../icons";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="mb-2 py-2 px-4">
            <nav className={`flex items-center container mx-auto min-w-[328px] max-w-[1136px] px-4 md:px-8`}>
                <div className="flex h-full items-center">
                    <Logo largura={100} altura={28}/>
                </div>
                <div className={`flex pl-3 items-center space-x-3 flex-row-reverse flex-grow sm:flex-row sm:justify-between`}>
                    <Pesquisa icone={IconeSearch} />

                    <Link href="/login">
                        <a
                            className="
                                bg-transparent
                                border
                                border-primary-400
                                text-sm
                                font-semibold
                                text-primary-400
                                py-3 px-4
                                hover:bg-primary-200
                                md:px-4 md:py-4 md:text-base md:font-normal
                                inline-flex
                                duration-200"
                        >Login</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}