import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

const apikey = String(process.env.ACCESS_TOKEN_TEST)
mercadopago.configure({
    access_token: apikey
})

export default async function Handler(req: NextApiRequest, res: NextApiResponse){
    const cancelmentId = String(req.query.cancelment_id)
    if(req.method !==  "PUT"){
        res.status(405).json("Metodo não permitido")
    }
    try {
        const response = await mercadopago.preapproval.cancel(cancelmentId)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json("Erro interno de servidor")
    }
}
