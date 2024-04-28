import axios from "axios";
import { PreApprovalProps, PreferenceProps } from "./@types";
import { useMutation } from "@/graphql/config/swr.config";
import { CREATE_USER } from "@/graphql/mutations/create-user";

export async function getPreference(request: PreferenceProps) {
  try {
    const response = await axios.post("/api/mercadopago_payment", request);
    const { url, id } = response.data;

    const { data, error } = useMutation(CREATE_USER, {
      createUserInput: {
        name: request.name,
        email: request.email,
        phone: request.phone,
        planId: id,
        recorrent: request.recorrent,
        payment: request.payment,
      },
    });

    if (error) {
      console.error("Erro ao criar usuário:", error);
    } else {
      console.log("Usuário criado com sucesso:", data);
      window.location.href = url;
    }
  } catch (error) {
    console.error("Erro ao obter preferência:", error);
  }
}

export async function createPreApproval(email: string) {
  try {
    const response = await axios.post("/api/subscription", { email: email });
    const { url } = response.data;
    window.location.href = url;
  } catch (error) {
    console.error(error);
    return "erro";
  }
}
export async function cancelment(id: string) {
  try {
    const response = await axios.put("/api/cancelment", {
      params: {
        cancelmentId: id,
      },
    });
    return response.data;
  } catch (error) {
    return "erro";
  }
}
