import Link from "next/link";
import { BsCheck } from "react-icons/bs";

export function Suport() {
    const emailConsult = "deydeyvid2022@gmail.com"
    return (
        <div 
        id="suport"
        className="bg-suport  lg:h-[50vh] h-[80vh] w-full md:text-white bg-cover bg-no-repeat">
            <div className="w-full md:bg-[#E63940] h-full md:bg-none bg-gradient flex flex-col justify-between p-5">
                <div className="w-4/5 flex  flex-col justify-between lg:w-[1140px] mx-auto py-5 ">
                    <div className="flex flex-col mt-5 gap-3 ">
                        <h2 className="text-3xl font-semibold uppercase">
                            Você Precisa de ajuda?
                        </h2>
                        <a href="">
                            Deseja falar com nossa equipe?
                        </a>
                        <Link href={`mailto:${emailConsult}`}>
                            <button>Problemas Técnicos?</button>
                        </Link>
                        <Link href="/cancelment">
                            Deseja cancelar seu plano mensal?
                        </Link>
                    </div>

                </div>
                <div className="w-full h-20 bg-gradient uppercase grid grid-cols-3 bottom-100 relative backdrop-blur-sm ">
                    <div className="justify-center  w-full h-full items-center flex  text-white">
                        <BsCheck /> suporte diário
                    </div>
                    <div className="border-l-2 border-l-white justify-center w-full h-full items-center flex text-white">
                        <BsCheck /> Método eficaz
                    </div>
                    <div className="border-l-2 border-l-white justify-center w-full h-full items-center flex text-white">
                        <BsCheck />Compra segura
                    </div>

                </div>
            </div>
        </div>
    )
}