import { BackButton } from "@/components/BackButton";
import { ProceedButton } from "@/components/ProceedButton";
import { getPreference } from "@/lib/mercadopago";
import { FormEvent, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";
import Cookies from 'js-cookie';
import { EmailInput } from "@/components/EmailInput";


export default function Handler() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function handlePayment(e: FormEvent) {
        e.preventDefault()
        const request = {
            amount: 329.9,
            product: "Plano Trimestral",
            installments: 6
        }
        Cookies.set('name', name);
        Cookies.set('email', email);

        setIsLoading(true);
        await getPreference(request);
        setIsLoading(false);
    }

    return (
        <div className="w-screen h-screen">
            <div className="w-4/5 md:w-[800px] xl:w-[1140px] mx-auto h-full flex flex-col  text-white">
                <h2 className="text-4xl font-bold mt-20 w-auto">
                    Plano Trimestral
                </h2>

                <form onSubmit={e => handlePayment(e)}>
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

                    <EmailInput 
                        email={email}
                        setEmail={setEmail} />
                    <ul className="flex flex-col my-10 text-zinc-400">
                        <li className="flex items-center">
                            <BsCheck />Renovação não é automática
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
                            <BsCheck />  Acesso à 3 meses com 28% de desconto em relação ao plano mensal
                        </li>
                    </ul>
                    <BackButton />
                    <ProceedButton
                        isLoading={isLoading}
                    />
                    <BackButton />
                </form>




            </div>
        </div>
    )
}