import {Input, InputGroup, InputRightElement, Stack} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

interface PesquisaProps {
    colorScheme: string,

    onSubmit?: () => {}
}

export default function Pesquisa(props: PesquisaProps) {
    return (
        <InputGroup>
            <Input placeholder='Pesquisar produto' />
            <InputRightElement children={<SearchIcon color='gray' />} />
        </InputGroup>
    )
}