import FormFaleConosco from "./FormFaleConosco";
import MenuFooter from "./MenuFooter";
import Developer from "./Developer";

export default function Footer() {
    return(
        <>
            <div className={`bg-primary-100`}>

                <div className={`flex flex-col container mx-auto min-w-[328px] max-w-[1136px] bg-primary-100 gap-4 py-4
                md:flex-row lg:gap-28`
                }>
                    <MenuFooter />
                    <FormFaleConosco />

                </div>
            </div>
            <Developer />
        </>
    )
}