import { api } from "@/lib/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { payer_email } = req.query;
  try {
    const response = await api.get("/preapproval/search", {
      params: {
        payer_email: payer_email
      }
    });
    const searchResult = response.data;
    if (searchResult.results.length === 0) {
      res.status(404).json({ message: "Nenhuma assinatura encontrada para este e-mail" });
    } else {
      res.status(200).json(searchResult);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar as assinaturas" });
  }
}
