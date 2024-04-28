import { QuestionBox } from "@/components/QuestionsBox";
import Image from "next/image";
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

export function About() {
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 300 })
    })
    return (
        <div className="w-full"
        id="about">
            <div className="w-full h-full mt-24">
                <div
                    className="w-[70%] md:max-w-[1140px] mx-auto">
                    <div 
                    data-aos="fade"
                    className="flex flex-col md:flex-row">
                        <QuestionBox
                            imageSrc="/black-halter.png"
                            question="QUER GANHAR MASSA?"
                        />
                        <QuestionBox
                            imageSrc="/body.png"
                            question="QUER EMAGRECER?"
                        />
                        <QuestionBox
                            imageSrc="/help.png"
                            question="PRECISA DE AJUDA ESPECIALIZADA?"
                        />
                    </div>
                    <h2 
                    data-aos="fade"
                    className="text-white w-full text-center md:text-start text-2xl font-bold mt-24">
                        TEMOS EXATAMENTE O QUE VOCÊ PRECISA!
                    </h2>
                    <p
                    data-aos="fade"
                    className="text-zinc-400 mt-4">
                        Com profissionais altamente qualificados e experientes
                        faremos você a construir o shape que tanto deseja.
                    </p>
                    <div
                    data-aos="fade"
                    className="flex flex-col w-full gap-5 md:flex-row">
                        <Image
                            className="mx-auto md:mx-0 rounded-lg mt-10"
                            src="/Nando.png"
                            width={350}
                            height={600}
                            quality={100}
                            alt="Nando tavares" />
                        <div className="md:flex md:flex-col lg:ml-10 md:justify-end">
                            <h3 className="text-[#E63940] font-bold mt-5 ">NANDO TAVARES</h3>
                            <p className="text-white  pb-5">
                            Meu nome é Ernandes Farias Tavares “ NANDO TAVARES” , formado pela UNIVERSIDADE
                             FEDERAL DE PERNAMBUCO, 2021. Inserido na musculação desde 2012. Com cursos no 
                             Arnaldo Classic 2023, Congresso Brasileiro de Medicina e Saúde e entre outros.
                              Expert em construção de glúteos e coxas. 

                            </p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade"
                    className="flex flex-col w-full gap-5 md:mt-32 md:flex-row">
                        <Image
                            className="mx-auto md:mx-0  rounded-lg mt-10"
                            src="/Jaciara.png"
                            width={350}
                            height={500}
                            quality={90}
                            alt="Jaciara Mendonça" />
                        <div className="md:flex md:flex-col lg:ml-10 md:justify-end">
                            <h3 className="text-[#E63940] font-bold mt-5 ">JACIARA MENDONÇA</h3>
                            <p className="text-white  pb-5">
                            Meu nome é Jaciara Mendonça, formada pela UNIVERSIDADE MAURÍCIO DE NASSAU, 2011. Expert em Emagrecimento e Estética.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}