interface TextInputProps{
    type: string
    id: string
    onChange?: any
    required: boolean
    minlength?: number
    maxlength?: number
    pattern?: string
}

export default function TextInput(props: TextInputProps) {

    const required = props.required

    if(required) {
        return(
            <input type={props.type} id={props.id} name={props.id} onChange={props.onChange} required minLength={props.minlength} maxLength={props.maxlength}
                   pattern={props.pattern}
                   className={`w-full pt-7 pb-2 px-3 font-normal text-base text-escuro-200 bg-claro-100 border-x-0 border-t-0 border-b-[1px] border-escuro-100 rounded-sm focus:ring-0`}
            />
        )

    } else {
        return(
            <input type={props.type} id={props.id} name={props.id} onChange={props.onChange} minLength={props.minlength} maxLength={props.maxlength}
                   pattern={props.pattern}
                   className={`w-full pt-7 pb-2 px-3 font-normal text-base text-escuro-200 bg-claro-100 border-x-0 border-t-0 border-b-[1px] border-escuro-100 rounded-sm focus:ring-0`}
            />
        )
    }
}