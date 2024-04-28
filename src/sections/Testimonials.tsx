import { TestimonialBox } from "@/components/Testimonial";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos'
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";


export function Testimonials() {
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 300 })
    })
    return (
        <div
            id="testimonials"
            className="w-full h-auto ">
            <div className="w-[90%] md:w-[1140px] py-10 mx-auto">
                <h2
                    data-aos="fade"
                    className="text-white uppercase w-full mb-10 text-center text-3xl font-semibold">
                    Resultados de quem é aluno&#40;a&#41; :
                </h2>
                <div
                    data-aos="fade"
                    className="flex flex-col gap-5 text-white">
                    <div className="lg:w-[1140px]">
                        <Image className="mx-auto lg:mx-0" alt="Roberta Farias" src="/Roberta.jpeg" height={200} quality={100} width={350} />
                        <div className="mx-auto w-4/5">
                            <div className="flex lg:w-[1140px] justify-between lg:justify-start lg:gap-20 mt-5 pr-4 items-center">
                                <h3 className="text-2xl font-black text-[#E63940]">Roberta Farias</h3>
                                <p className="">1 ano de consultoria</p>
                            </div>
                            <a
                                className=" flex text-zinc-400 items-center gap-1 "
                                href="https://www.instagram.com/robertabellyfarias/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FiInstagram className="w-4 h-4" />
                                robertabellyfarias
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}