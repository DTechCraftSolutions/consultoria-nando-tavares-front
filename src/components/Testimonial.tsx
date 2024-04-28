import { BsQuote } from "react-icons/bs"
import { FiInstagram} from "react-icons/fi"
import { AiOutlineTwitter} from "react-icons/ai"

export function TestimonialBox() {
    return (
        <div
            className="w-full  ">
            <div className="w-full justify-start">
                <BsQuote className="w-8 text-white h-8"/>
            </div>
            <video 
            controls
            className="w-4/5 mx-auto"
            src="/temporario.mp4"> 
            </video>
            <h3 className="w-4/5 uppercase mx-auto text-[#E63940] font-semibold"  >
                nome sobrenome
            </h3>
            <div className="flex gap-2 w-4/5 mx-auto">
            <a
            className=" flex text-zinc-400 items-center gap-1 "
            href="https://www.instagram.com/">
                <FiInstagram className="w-4 h-4"/>
                nome de usuário
            </a>
            <a 
            className="text-zinc-400 flex items-center gap-1"
            href="https://twitter.com/">
                <AiOutlineTwitter className="w-4 h-4"/>
                twitter
            </a>
            </div>
        </div>
    )
}