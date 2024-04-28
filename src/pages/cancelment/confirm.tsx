import { BackButton } from "@/components/BackButton";
import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";


interface ServerSideProps {
    id: string;
  }

export default function Handler(props: ServerSideProps){
    const router = useRouter()
    const cancelment_id = props?.id
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()
    const handleCancelment = async () => {
        setLoading(true)
        try {
            const response = await axios.put(`/api/cancelment?cancelment_id=${cancelment_id}`)
            console.log(response)
            router.push('/cancelment/success?cancelment_status=cancelled')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-screen h-screen text-white text-center">
            <div className="w-4/5 mx-auto">
                <h2 className="text-4xl font-bold pt-28">
                    Uma pena que você queira cancelar seu plano
                </h2>
                <p className="text-zinc-400">
                    para confirmar o cancelamento clique no botão abaixo:
                </p>
                <BackButton/>
                <Image width={250} height={150} src="/Logo.png" className="mx-auto mt-5" alt=""/>
                <button 
                onClick={handleCancelment}
                className="bg-red-500 mt-5 px-5 font-semibold text-xl py-1">
                                {
                loading ? <div className="h-8 w-8 mx-auto border-4 border-l-transparent border-b-transparent border-r-zinc-900 border-t-zinc-900 animate-spin ease-linear rounded-full "> </div>
                : "cancelar"

            }
                </button>
            </div>
        </div>
    )
}
export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
    const { payment_id } = query;
  
    if (!payment_id) {
      res.setHeader('Location', '/');
      res.statusCode = 302;
      res.end();
      return {
        props: {},
      };
    }
  
    return {
      props: {
        id: payment_id,
      },
    };
  };
  