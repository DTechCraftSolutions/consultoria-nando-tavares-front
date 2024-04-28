import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';



const apiKey = String(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(apiKey);
export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const CONSULTORIA_EMAIL = String(process.env.CONSULTORIA_EMAIL)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }


  try {
    const { to, subject, html } = req.body

    const msg = {
      to: to,
      from: CONSULTORIA_EMAIL,
      subject: subject,
      html: html,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar o e-mail', error });
    console.log(error);
  }
}
