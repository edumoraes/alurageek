interface TextInputProps{
    type: string
    id: string
    onChange?: any
}

export default function TextInput(props: TextInputProps) {
    return(
        <input type={props.type} id={props.id} name={props.id} onChange={props.onChange}
               className={`w-full pt-7 pb-2 px-3 font-normal text-base text-escuro-200 bg-claro-100 border-x-0 border-t-0 border-b-[1px] border-escuro-100 rounded-sm focus:ring-0`}
        />
    )
}