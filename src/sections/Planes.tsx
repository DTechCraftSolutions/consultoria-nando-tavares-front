import { PlaneBox } from "@/components/PlaneBox";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos'


export function Planes() {
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 300 })
    })
    return (
        <div
        id="planes"
            className="w-full mt-10 h-auto">
            <div className="w-[80%] md:w-[1140px] py-20 mx-auto h-full">
                <h2
                    data-aos="fade"
                    className="text-white text-3xl mb-10 mt-10 font-bold uppercase" >Confira nossos planos</h2>
                <div 
                className="flex flex-col md:flex-row gap-5 pb-10">
                    <PlaneBox
                        price="149,90"
                        text="terá acesso a todo nosso conteúdo, tanto dietas como treinos e orientações da nossa equipe, com renovação automática"
                        monthsAmount="MÊS"
                        plane="Plano mensal"
                        fidelity="pode ser cancelado a todo momento" />
                    <PlaneBox
                        price="249,90"
                        text="terá acesso a todo nosso conteúdo, tanto dietas como treinos e orientações da nossa equipe, sem renovação automática"
                        monthsAmount="2 MESES"
                        plane="Plano bimestral"
                        fidelity="fidelidade de 2 meses"
                        emphasis 
                        aosDelay="100"/>
                    <PlaneBox
                        price="329,90"
                        text="terá acesso a todo nosso conteúdo, tanto dietas como treinos e orientações da nossa equipe, sem renovação automática"
                        monthsAmount="3 MESES"
                        plane="Plano trimestral"
                        fidelity="fidelidade de três meses"
                        aosDelay="200"
                    />
                </div>
            </div>
        </div>
    )
}