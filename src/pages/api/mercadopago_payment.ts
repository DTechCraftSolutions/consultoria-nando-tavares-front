import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

mercadopago.configure({
  access_token: String(process.env.MERCADOPAGO_ACCESS_TOKEN),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount, installments, product, client_id, email, phone, name } =
    req.body;

  const preference = {
    items: [
      {
        title: product,
        unit_price: amount,
        quantity: 1,
      },
    ],
    payment_methods: {
      installments: installments,
    },
    back_urls: {
      success: `${process.env.NEXT_PUBLIC_VERCEL_URL}/preferences/success`,
      failure: `${process.env.NEXT_PUBLIC_VERCEL_URL}/sell`,
    },
    //Aprovação de pagamento
    // notification_url: `${process.env.API_URL}/approved/${client_id}`
  };
  //pegar id do plano na resposta e salvar no DB, payload do usuario vem no body
  const response = await mercadopago.preferences.create(preference);
  res.json({
    url: response.body.init_point,
    id: response.body.id,
  });
}
