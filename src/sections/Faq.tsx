import { Select } from "@/components/Select";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos'
import Link from "next/link";


export function FAQ() {
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 300 })
    })
    return (
        <div className="w-full "
            id="faq">
            <div className="w-full h-full flex justify-center ">
                <div className="w-[80%] md:max-w-[1140px] " >
                    <h2 className="text-white text-3xl mt-16 font-semibold">
                        Perguntas que você pode ter:
                    </h2>
                    <div
                        data-aos="fade"
                        className="w-full md:grid md:grid-cols-2 flex flex-col gap-5 mt-10">
                        <Select
                            h="sm"
                            question="O que a consultoria oferece?"
                            topic1="Nutricionista"
                            topic2="Treinos personalizados"
                            topic3="Prescrição de suplementos e farmacos" />
                        <Select
                            h="sm"
                            question="Comecei agora, tem algum problema?"
                            topic1="Nossa consultoria abrange a todos os  públicos, inclusive iniciantes" />
                        <Select
                            h="sm"
                            question="Como vai ser nossa comunicação?"
                            topic1="comunicação via whatsapp e videochamadas" />
                        <Select
                            h="md"
                            question="Como vai funcionar a consultoria?"
                            topic1="analizaremos sua rotina e sua alimentação"
                            topic2="montaremos uma estrutura de treinos e alimentação de acordo com as necessidades do seu dia"
                            topic3="acompanharemos você diariamente e estaremos a sua disposição para tirar suas dúvidas" />

                        <Select
                            h="sm"
                            question="Tenho pouquissimo tempo diário, posso participar?"
                            topic1="Qualquer pessoa pode participar, visto que analisaremos o dia a dia de cada um individualmente para montar a melhor rotina de treinos e alimentação " />
                        <Select
                            h="sm"
                            question="Dieta e treino são os mesmos sempre?"
                            topic1="os treinos e dieta serão atualizados mensalmente" />
                    </div>
                    <div
                        data-aos="fade-up"
                        className="w-full flex pb-10 justify-center">
                        <button className="w-4/5 text-white mt-40 md:w-72 md:mx-auto text-xl shadow-[#E63940] bg-[#E63940] -z-20 hover:duration-500 hover:scale-110 hover:ease-in-out  py-2 rounded-md shadow-2xl">
                            <Link
                                className='w-full h-full'
                                href="/sell">
                                Entre agora!
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}