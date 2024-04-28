import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export function Header() {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full h-16 fixed z-50 duration-500 ${scrollPosition > 0 ? 'bg-black' : 'bg-transparent'}`}>
            <div className="px-5 md:px-0 max-w-[1140px] mx-auto w-full flex items-center h-full justify-between">
                <Image src="/logo-reduzida.png" width={50} height={50} alt="logo" />
                {
                    open ?
                    <AiOutlineClose
                    onClick={() => setOpen(!open)}
                    className="text-white cursor-pointer w-8 h-8" /> 
                    
                    : <GiHamburgerMenu
                            onClick={() => setOpen(!open)}
                            className="text-white cursor-pointer w-8 h-8" />
                }
            </div>
            <div className={`${open ? "translate-y-0 backdrop-blur-lg" : "-translate-y-[150%] lg:-translate-y-[200%] backdrop-blur-0"} duration-500 lg:h-20 h-[92vh] flex  items-center bg-gradient absolute z-50 w-full`}>
                <div className="w-[90%] md:max-w-[1140px] mx-auto items-center text-white flex lg:flex-row md:justify-between flex-col font-semibold lg:text-lg text-2xl gap-5 ">
                    <a 
                    onClick={() => setOpen(!open) }
                    href="#">
                        HOME
                    </a>
                    <a href="#about"
                    onClick={() => setOpen(!open) }>
                        SOBRE
                    </a>
                    <a href="#faq"
                    onClick={() => setOpen(!open) }>
                        PERGUNTAS FREQUENTES
                    </a>
                    <a href="#testimonials"
                    onClick={() => setOpen(!open) }>
                        DEPOIMENTOS
                    </a>
                    <a 
                    onClick={() => setOpen(!open) }
                    href="#planes">
                        PLANOS
                    </a>
                    <a 
                    onClick={() => setOpen(!open) }
                    href="#suport">
                        SUPORTE
                    </a>
                    <Link
                        className="bg-[#E63940] font-bold w-40 py-2 flex justify-center items-center rounded relative hover:scale-110 hover:duration-500 hover:ease-out "
                        href="/sell">
                        ADIQUIRA JÁ!
                    </Link>
                </div>
            </div>
        </div>
    );
}
