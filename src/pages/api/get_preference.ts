import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const planId = String(req.query.planId)
    console.log(process.env.MERCADOPAGO_ACCESS_TOKEN)
    try {
        const transaction = await axios.get(`https://api.mercadopago.com/checkout/preferences/${planId}`, {
            headers: {
                Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
                "User-Agent": "axios 0.27.2",
                "Content-Type": "application/json"
            }
        })
        return res.status(200).json(transaction.data)
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro ao recuperar informações da transação' });
    }
}