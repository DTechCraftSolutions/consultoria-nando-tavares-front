import { BackButton } from "@/components/BackButton";
import { EmailInput } from "@/components/EmailInput";
import { ProceedButton } from "@/components/ProceedButton";
import { getBilling } from "@/lib/getBilling";
import { sendEmail } from "@/lib/sendGrid";
import { FormEvent, useState } from "react";

export default function Handler() {
    const [successMessage, setSuccessMessage] = useState<string>()
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const sendEmailCancelment = async (e: FormEvent) => {
        e.preventDefault()
        setError(undefined)
        setSuccessMessage(undefined)
        try {
            setLoading(true)
            const response = await getBilling(email)
            if (response === "error") {
                return setError('Não encontramos assinaturas ativas em seu email')
            }
            const filteredResponse = response.results?.filter((result: any) => result.status !== "cancelled")
            const emailData = {
                to: "deydeyvid2022@gmail.com",
                subject: `Cancelamento do cliente ${email.toUpperCase()}`,
                html: `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #000;">
                <div style="background-color: #000; padding: 20px;">
                    <h1 style="color: #ff0000; text-align: center;">Consultoria Nando Tavares</h1>
                </div>
                <div style="padding: 20px;">
                    <p>Olá <strong>${email.toUpperCase()}</strong>,</p>
                    <p>Uma pena que você queira cancelar o <strong>Plano mensal</strong> com a Consultoria Nando Tavares.</p>
                    <p>Esperamos vê-lo novamente em breve</p>

                    <p>ID da transação: ${filteredResponse[0].id}</p>
                    <p>Para cancelar, clique no botão abaixo:</p>
                    <div style="text-align: center; margin-top: 20px;">
                    <a href="${process.env.NEXT_PUBLIC_VERCEL_URL}/cancelment/confirm?payment_id=${filteredResponse[0].id}" target="_blank" style="background-color: #ff0000; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Cancelar</a>

                    </div>
                </div>
            </div>
                `
            }
            sendEmail(emailData);
            setEmail("")
            setSuccessMessage("assinatura encontrada, confirme o cancelamento pelo email que te enviamos")
        } catch (error) {
            console.error(error)

        } finally {
            setLoading(false)
        }


    }
    return (
        <div className="w-screen h-screen">
            <div className="text-white w-4/5 mx-auto pt-20 uppercase">
                <h2 className="text-3xl font-bold">
                    Cancelamento
                </h2>

                <p className="text-zinc-400 mt-5">
                    Prezado cliente,
                    Gostaríamos de informar que nossa política de cancelamento não prevê reembolso em caso de interrupção do plano contratado durante seu período vigente. Contudo, nos comprometemos a prestar o serviço pelo período de 30 dias normalmente, mesmo que o cancelamento ocorra antes do término previsto.
                    Após a expiração da assinatura, não realizaremos a renovação automática. Caso deseje retomar o serviço, solicitamos que realize uma nova contratação em nosso site.
                    Agradecemos a compreensão e nos colocamos à disposição para eventuais esclarecimentos.
                    Atenciosamente, <strong>Consultoria Nando Tavares</strong>
                </p>
                <form
                    onSubmit={(e) => sendEmailCancelment(e)}
                    className="mt-10"
                >
                    <h3 className="text-2xl mb-5">
                        Digite seu email para prosseguirmos
                    </h3>
                    <EmailInput
                        email={email}
                        setEmail={setEmail} />
                    <ProceedButton
                        isLoading={loading}

                    />

                </form>
                <BackButton />

                {error &&
                    <p className="text-red-500 text-base  duration-500 pt-3 md:text-start text-center">
                        {error}
                    </p>
                }
                {successMessage &&
                    <p className="text-green-500 text-base duration-500 p-3 md:text-start text-center">
                        {successMessage}
                    </p>
                }
            </div>
        </div>
    )
}


