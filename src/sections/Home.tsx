import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";
import Aos from 'aos'



export function HomeMobile() {
    useEffect(() => {
        Aos.init({ easing: "ease-out", duration: 700 })
    })
    return (
        <div
            data-aos="fade-in"
            className="w-full h-screen xl:bg-home-pc bg-home bg-cover bg-no-repeat border-red-500 ">
            <div className="w-full bg-gradient h-full flex justify-center items-center text-white ">
                <div className="w-2/3">

                    <h2 className="text-3xl md:text-4xl w-full font-semibold text-center">
                        Você deseja ter o shape dos sonhos, mas não sabe como?
                    </h2>
                    <h3 className="text-4xl md:text-5xl w-full font-bold mb-5 text-center mt-5">
                        Essa é a sua oportunidade!
                    </h3>
                    <Image
                        src="/Logo.png"
                        width={250}
                        height={150}
                        alt={"logo"}
                        className="mx-auto mb-5" />
                    <div className="w-full flex justify-center">
                        <button className="w-4/5 md:w-72 md:mx-auto text-xl hover:shadow-[#E63940] bg-[#E63940] relative hover:duration-500 hover:scale-110 hover:ease-in-out  py-2 rounded-md hover:shadow-2xl">
                            <Link
                                className='w-full h-full'
                                href="/sell">
                                Participe dessa jornada!
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}