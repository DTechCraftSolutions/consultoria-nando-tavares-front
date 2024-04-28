
import { BuyPlan } from "@/components/BuyPlan"
import Link from "next/link"


interface checkoutRequest {
    amount: number;
    installments: number;
    product: string;
}

export default function Sell() {
    return (
        <div className="w-screen h-auto max-w-full">
            <div className="w-[80%] mx-auto text-center h-full  ">
                <h2 className="text-white font-medium text-3xl pt-6">
                    SELECIONE O PLANO:
                </h2>
                <div className="flex md:flex-row flex-col mt-12 gap-5">
                    <BuyPlan
                        link="/preapproval/add-email"
                        name="Plano mensal"
                        duration="mês"
                        price="149,90"
                        description="renovação automática a cada 30 dias, é possível cancelar aqui nesse mesmo site" />
                    <BuyPlan
                        link="/preferences/bimonthly"
                        name="Plano Bimestral"
                        duration="2 meses"
                        price="249,90"
                        description="parcelamento em até 6x em todos os cartões, boleto e pix" />
                    <BuyPlan
                        link="/preferences/trimonthly"
                        name="Plano Trimestral"
                        duration="3 meses"
                        price="329,90"
                        description="parcelamento em até 6x em todos os cartões, boleto e pix" />

                </div>
                <div className="pt-10  w-full pb-10">
                    <Link
                        className="text-white bg-zinc-900 mt-10 px-20 py-2"
                        href="/">
                        Voltar
                    </Link>
                </div>
            </div>
        </div>
    )
}



