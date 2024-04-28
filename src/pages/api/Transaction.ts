import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

mercadopago.configure({
  access_token: String(process.env.MERCADOPAGO_ACCESS_TOKEN)
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const paymentId = Number(req.query.payment_id)

  try {
    const transaction = await mercadopago.payment.get(paymentId);
    res.json({
      title: transaction.body.additional_info.items[0].title,
      amount: Number(transaction.body.additional_info.items[0].unit_price),
      clientName: transaction.body.card.cardholder.name,
      cpf: transaction.body.card.cardholder.identification.number,
      installments: transaction.body.installments
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao recuperar informações da transação' });
  }
}