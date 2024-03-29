import TextField from "../molecules/TextField";
import AnchorButton from "../molecules/AnchorButton";
import {IconPlusSm} from "../atoms/icons";

export default function FormNovoProduto() {
    return(
        <form action="" className={`container mx-auto max-w-[328px] md:max-w-[704px] px-4`}>
            <div className={`flex flex-col gap-4 text-center`}>
                <span className={`text-base font-bold text-escuro-200`}>Adicionar novo produto</span>
                <div className={`relative flex flex-col items-center justify-center gap-4 w-full aspect-[328/134] bg-claro-100 border border-escuro-100 border-2 border-dashed hover:bg-primary-200`}>
                    <span>{IconPlusSm}</span>
                    <span className={`text-escuro-200 text-[0.875rem]`}>Adicionar uma imagem para o produto</span>
                    <input type="file"
                        className={`absolute w-full h-full opacity-0 cursor-pointer`}
                    />
                </div>
                <TextField required={true} type={`text`} id={`product`} label={`Nome do produto:`} />
                <TextField required={true} type={`text`} id={`price`} label={`Preço do produto:`} />
                <div className={`flex flex-col items-center`}>
                    <AnchorButton href={`#`} name={`Entrar`} btnType={`btn-primary`} />
                </div>

            </div>

        </form>
    )
}