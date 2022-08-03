interface PesquisaProps {
    onSubmit?: () => {}
    icone: any
}

export default function Pesquisa(props: PesquisaProps) {
    return (
        <form className="relative block">

            <span className="sr-only">Pesquisa</span>

            <input placeholder="Pesquisar produtos" type="text" name="search" id="search"
                className="
                    placeholder:text-transparent
                    text-transparent
                    border-none
                    rounded-full
                    w-11
                    transition-transform
                    ease-in-out
                    delay-300
                    duration-300

                    focus:text-escuro-200
                    focus:py-4 focus:pr-12 focus:pl-4 focus:w-full focus:fixed focus:ring-0
                    focus:top-1 focus:left-0 focus:right-0 focus:placeholder:text-escuro-100
                    focus:bg-claro-200

                    sm:py-4 sm:pr-12 sm:pl-4
                    sm:w-64
                    sm:placeholder:text-escuro-100
                    sm:bg-claro-200
                    sm:text-escuro-200

                    sm:focus:relative sm:focus:top-0 sm:focus:w-64

                    xl:w-96
                    xl:focus:w-96
                    "
            />

            <span className="absolute pointer-events-none inset-y-0 right-0 flex items-center pr-2">
                {props.icone}
            </span>
        </form>
    )
}