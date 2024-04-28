import axios from "axios";
import { EmailData } from "./@types";

export async function sendEmail(emailData: EmailData) {
    try {
      const response = await axios.post('/api/notifications', emailData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  }