import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";


const apikey = String(process.env.MERCADOPAGO_ACCESS_TOKEN)
 mercadopago.configure({
  access_token: apikey
})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const Email = String( req.body.email )
    const {email, name, phone} = req.body
    const url = String(process.env.NEXT_PUBLIC_VERCEL_URL)
    try {
      if (req.method !== 'POST') {
        return res.status(405).end(); 
      }
      const subscription = await mercadopago.preapproval.create({
          reason: "plano com acesso a todo nosso conteúdo, tanto dietas como treinos e orientações da nossa equipe, com renovação automática",
          auto_recurring: {
              transaction_amount: 149.9,
              frequency: 1,
              frequency_type: 'months',
              currency_id: "BRL"
          },
          back_url: `${url}/sell`,
          payer_email: Email
      })
    //pegar o id do plano e guardar usuário, o body já traz o payload que precisa!
      res.status(200).json({
        url: subscription.body.init_point
      })
      
    } catch (error) {
      console.log(error)
        res.status(500).json({
          message: "Email inválido"
        })
    }
    
  }