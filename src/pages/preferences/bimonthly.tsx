import { BackButton } from "@/components/BackButton";
import { ProceedButton } from "@/components/ProceedButton";
import { FormEvent, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import Cookies from "js-cookie";
import { EmailInput } from "@/components/EmailInput";
import { IoLogoWhatsapp } from "react-icons/io";
import { payment } from "mercadopago";
import { PreferenceProps } from "@/lib/@types";
import { useMutation } from "@/graphql/config/swr.config";
import { CREATE_USER } from "@/graphql/mutations/create-user";
import axios from "axios";

const performMutation = async (
  mutation: string,
  createUserInput: {
    name: string;
    email: string;
    phone: string;
    planId: string;
    recorrent: string;
    payment: boolean;
  }
) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
      query: mutation,
      variables: {
        createUserInput: {
          name: createUserInput.name,
          email: createUserInput.email,
          phone: createUserInput.phone,
          planId: createUserInput.planId,
          recorrent: createUserInput.recorrent,
          payment: createUserInput.payment,
        },
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro na mutação: ${error}`);
  }
};

export default function Handler() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleMutation = async (id: string) => {
    setIsLoading(true);
    try {
      await performMutation(CREATE_USER, {
        name,
        email,
        planId: id,
        recorrent: "N",
        payment: false,
        phone,
      });
    } catch (error) {
      console.error("Erro na mutação:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const request = {
      amount: 249.9,
      product: "Plano Bimestral",
      installments: 6,
      phone,
      email,
      name,
      payment: false,
      recorrent: "N",
    };

    setIsLoading(true);
    try {
      const response = await axios.post("/api/mercadopago_payment", request);
      const { url, id } = response.data;
      await handleMutation(id);
      window.location.href = url;
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-4/5 md:w-[800px] xl:w-[1140px] mx-auto h-full flex flex-col  text-white">
        <h2 className="text-4xl font-bold mt-20 w-auto">Plano Bimestral</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="relative my-5">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPhone(e.target.value)}
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

          <EmailInput email={email} setEmail={setEmail} />
          <ul className="flex flex-col my-10 text-zinc-400">
            <li className="flex items-center">
              <BsCheck />
              Renovação não é automática
            </li>
            <li className="flex items-center">
              <BsCheck /> Acesso aos treinos diários com Nando Tavares
            </li>
            <li className="flex items-center">
              <BsCheck /> Acesso às dietas personalizadas com Jaciara Mendonça
            </li>
            <li className="flex items-center">
              <BsCheck /> Suporte completo via whatsapp
            </li>
            <li className="flex items-center">
              <BsCheck /> Acesso à 2 meses com 15% de desconto em relação ao
              plano mensal
            </li>
          </ul>
          <BackButton />
          <ProceedButton isLoading={isLoading} />
          <BackButton />
        </form>
      </div>
    </div>
  );
}
