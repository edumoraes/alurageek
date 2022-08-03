import TextField from "../molecules/TextField";
import Button from "../molecules/Button";

export default function FormLogin() {
    return(
        <form action="" className={`container mx-auto max-w-[275px] lg:max-w-[423px] px-4`}>
            <div className={`flex flex-col gap-4 text-center`}>
                <span className={`text-base font-bold text-escuro-200`}>Iniciar Sessão</span>
                <TextField type={`email`} id={`email`} label={`Escreva seu email:`} />
                <TextField type={`password`} id={`password`} label={`Escreva sua senha:`} />
                <div className={`flex flex-col items-center`}>
                    <Button href={`#`} name={`Entrar`} btnType={`btn-primary`} />
                </div>

            </div>

        </form>
    )
}