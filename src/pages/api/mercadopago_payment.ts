import { CREATE_USER } from "@/graphql/mutations/create-user";
import { UPDATE_USER } from "@/graphql/mutations/update-user";
import { FIND_BY_USER_EMAIL } from "@/graphql/query/find-by-user-email";
import { GraphQLClient } from "graphql-request";
import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";

mercadopago.configure({
  access_token: String(process.env.MERCADOPAGO_ACCESS_TOKEN),
});
const envGQL = String(process.env.NEXT_PUBLIC_API_URL);
const createUserMutation = CREATE_USER;
const findByUserEmail = FIND_BY_USER_EMAIL;
const client = new GraphQLClient(envGQL);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    amount,
    installments,
    product,
    email,
    phone,
    name,
    recorrent,
    payment,
  } = req.body;

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

    notification_url: `${process.env.NEXT_PUBLIC_API_URL_REST}/users/${email}`,

    //Aprovação de pagamento
  };
  //pegar id do plano na resposta e salvar no DB, payload do usuario vem no body
  const response = await mercadopago.preferences.create(preference);
  res.json({
    url: response.body.init_point,
    id: response.body.id,
  });
  await client.request(createUserMutation, {
    createUserInput: {
      name: name,
      email: email,
      phone: phone,
      planId: response.body.id,
      recorrent: recorrent,
      payment: payment,
    },
  });
}
