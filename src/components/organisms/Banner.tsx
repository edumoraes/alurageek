// import required modules
import Link from "next/link";
import AnchorButton from "../molecules/AnchorButton";

interface BannerProps{
    img: string
    title: string
    subtitle: string
    btnName: string
    btnType: string
    url: string
}

export default function Banner(props: BannerProps) {
    return (
        <div className="relative overflow-hidden w-full aspect-[360/192] md:aspect-[768/352] 2xl:aspect-[1440/358]">
          <img src={props.img} alt="banner"
                    className={
                        `absolute w-full place-self-center self-center 
                        z-10 transform pointer-events-none
                        transform scale-110 object-contain object-center`
                    }
                />
      
            <div
                data-atropos-offset="1"
                className="
                    absolute left-0 top-0 w-full h-full z-20 p-4
                    flex justify-center
                    text-claro-100
                    md:p-8
                    xl:px-0
                "

            >
                <div className={`flex flex-col space-y-2 w-full container mx-auto min-w-[328px] max-w-[1136px] justify-end z-30`}>
                    <h1 className="text-[1.375rem] font-bold md:text-[3.25rem]">{props.title}</h1>
                    <p className={`text-sm font-semibold md:text-[1.375rem] md:font-bold`}>{props.subtitle}</p>
                    <AnchorButton btnType={props.btnType} href={props.url} name={props.btnName} />
                </div>

                <div
                    className="
                        absolute bottom-0 left-0
                        z-0
                        w-full h-4/6
                        bg-blend-multiply
                        banner-box-bg bg-gradient-to-t from-[#000000]/80 to-[#000000]/0"
                />
            </div>
        </div>
    );
}
