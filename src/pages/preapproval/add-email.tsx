import { BackButton } from "@/components/BackButton";
import { ProceedButton } from "@/components/ProceedButton";
import { createPreApproval } from "@/lib/mercadopago";
import Cookies from "js-cookie";
import { FormEvent, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Handler() {
    const [error, setError] = useState<string>()
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("");
    // Email de pagamentos para testar: test_user_1009046034@testuser.com
    async function handlePayment(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true)
        setError(undefined)
        try {
            //implementar  comunicação com o banco
            const response = await createPreApproval(email)
            if (response === "erro") {
                setError("Digite um email válido")
            }
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }
    console.log(error)
    return (
        <div className="w-screen h-screen">
            <div className="w-4/5 md:w-[800px] xl:w-[1140px] mx-auto h-full flex flex-col  text-white">
                <h2 className="text-4xl font-bold mt-20 w-auto">
                    Plano Mensal
                </h2>
                <form
                    onSubmit={(e) => handlePayment(e)}>
                    <div className="relative my-5">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full md:w-3/5 px-4 py-3 rounded-md bg-zinc-900 border-transparent text-zinc-300 border-2 focus:duration-500 focus:transition-all focus:ease-linear focus:outline-none  focus:border-2 focus:border-white focus:ring-0"
                            placeholder="Digite seu nome"
                            required
                        />
                        <div className="absolute inset-y-0 right-0 md:right-[330px] xl:right-[460px] flex items-center px-2 pointer-events-none">
                            <FiUser className="text-gray-400" />
                        </div>
                    </div>
                    <div className="relative my-5">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            type="text"
                            id="phone"
                            name="phone"
                            className="block w-full md:w-3/5 px-4 py-3 rounded-md bg-zinc-900 border-transparent text-zinc-300 border-2 focus:duration-500 focus:transition-all focus:ease-linear focus:outline-none  focus:border-2 focus:border-white focus:ring-0"
                            placeholder="Digite seu whatsapp"
                            required
                        />
                        <div className="absolute inset-y-0 right-0 md:right-[330px] xl:right-[460px] flex items-center px-2 pointer-events-none">
                            <IoLogoWhatsapp className="text-gray-400" />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full md:w-3/5 px-4 py-3 rounded-md bg-zinc-900 border-transparent text-zinc-300 border-2 focus:duration-500 focus:transition-all focus:ease-linear focus:outline-none  focus:border-2 focus:border-white focus:ring-0"
                            placeholder="Digite seu email"
                            required
                        />
                        <div className="absolute inset-y-0 right-0 md:right-[330px] xl:right-[460px] flex items-center px-2 pointer-events-none">
                            <FiMail className="text-gray-400" />
                        </div>
                    </div>
                    <ul className="flex flex-col my-10 text-zinc-400">
                        <li className="flex items-center">
                            <BsCheck /> Renovação automática
                        </li>
                        <li className="flex items-center" >
                            <BsCheck /> Acesso aos treinos diários com Nando Tavares
                        </li>
                        <li className="flex items-center">
                            <BsCheck /> Acesso às dietas personalizadas com Jaciara Mendonça
                        </li>
                        <li className="flex items-center">
                            <BsCheck /> Suporte completo via whatsapp
                        </li>
                        <li className="flex items-center">
                            <BsCheck /> Pode ser cancelado a qualquer momento com o contato do nosso suporte
                        </li>
                    </ul>
                    <ProceedButton
                        isLoading={isLoading} />
                    <BackButton />
                </form>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    )
}