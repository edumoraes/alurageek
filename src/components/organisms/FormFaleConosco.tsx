import TextField from "../molecules/TextField";

interface FaleConoscoProps {
    onClick?: any
}

export default function FormFaleConosco(props: FaleConoscoProps) {
    return(
        <form action={props.onClick}
            className={`flex flex-col gap-4 px-4 md:px-8 md:grow`}
        >
            <span className={`text-base font-bold text-escuro-200`}>Fale consoco</span>

            <TextField label={"Nome:"} id={"first"} type={"text"} />

            <TextField label={"Escreva sua mensagem:"} id={"mesage"} type={"text"} />

            <button className={
                `w-fit text-claro-100 bg-primary-400
                font-semibold py-3 px-4 hover:bg-opacity-70
                duration-200 lg:p-4 lg:font-normal`
            } type="submit">Enviar mensagem</button>
        </form>
    )
}