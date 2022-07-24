import {Input, InputGroup, InputRightElement, Stack} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

interface PesquisaProps {
    colorScheme: string,

    onSubmit?: () => {}
}

const inputIcon = <SearchIcon color='gray' />

export default function Pesquisa(props: PesquisaProps) {
    return (
        <InputGroup>
            <Input placeholder='Pesquisar produto' />
            {/* eslint-disable-next-line react/no-children-prop */}
            <InputRightElement children={inputIcon} />
        </InputGroup>
    )
}