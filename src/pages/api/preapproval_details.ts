import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";
const apikey = String(process.env.ACCESS_TOKEN_TEST)
mercadopago.configure({
  access_token: apikey
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const preapprovalId = String(req.query.preapproval_id) 

  try {
    const transaction = await mercadopago.preapproval.get(preapprovalId);

    res.json({
      plan: "Plano Mensal",
      email: transaction.body.payer_email,
      paymentMethod: transaction.body.payment_method_id
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao recuperar informações da transação' });
  }
}