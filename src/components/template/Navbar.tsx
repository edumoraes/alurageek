import Logo from './Logo'
import Pesquisa from './Pesquisa'
import {Button} from "@chakra-ui/react";

export default function Navbar() {
    return (
        <header className="mb-2 py-2 px-4">
            <nav className={`flex justify-between items-center`}>
                <div className="flex h-full items-center">
                    <Logo />
                </div>
                <div className={`flex space-x-3`}>
                    <Pesquisa colorScheme={`blue`} />
                    <Button colorScheme='blue'>Login</Button>
                </div>
            </nav>
        </header>
    )
}