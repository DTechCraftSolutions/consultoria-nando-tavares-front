import axios from "axios";
const apikey = String(process.env.ACCESS_TOKEN_TEST)
export const api = axios.create({
    baseURL: 'https://api.mercadopago.com/',
    headers: {
      Authorization: `Bearer ${apikey}`
    }
  })