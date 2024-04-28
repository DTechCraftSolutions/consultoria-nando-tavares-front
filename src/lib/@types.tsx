export interface PreferenceProps {
  amount: number;
  installments: number;
  product: string;
  name: string;
  email: string;
  phone: string;
  recorrent: string;
  payment: boolean;
}
export interface PreApprovalProps {
  email: string;
}

export interface EmailData {
  to: string;
  subject: string;
  html: string;
}
