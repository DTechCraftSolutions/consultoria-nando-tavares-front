import { BackButton } from "@/components/BackButton";
import { cancelment } from "@/lib/mercadopago";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";


interface ServerSideProps{
    id: string;
}

export default function ThankYouPage(props: ServerSideProps) {

    return (
        <div className="w-screen h-screen flex  text-white flex-col bg-thanks bg-no-repeat bg-cover items-center justify-center">
            <div className="bg-gradient">
            <div className="w-4/5 h-screen mx-auto text-center pt-32">
                <h1 className="text-4xl font-bold  mb-5">Obrigado por utilizar nossos serviços!</h1>
                <p className="text-xl  mb-5 ">
                    Agradecemos a confiança em nossos profissionais especializados em dieta e treino com personal trainer e nutricionista. Lamentamos o cancelamento, mas esperamos que possamos atendê-lo novamente em breve.
                </p>
                <BackButton />
                <Image src="/Logo.png" className="mx-auto"  width={250} height={300} alt=""/>
            </div>
            </div>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
    const {cancelment_status} = query
    if (!cancelment_status || cancelment_status !== "cancelled") {

      res.setHeader('Location', '/');
      res.statusCode = 302;
      
      res.end();
      return {
        props: {},
      };
    }
  
    return {
      props: {
        
      },
    };
  };
  