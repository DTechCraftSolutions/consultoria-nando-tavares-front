export interface PreferenceProps {
    amount: number;
    installments: number
    product: string;

}
export interface PreApprovalProps {
    email: string;
}

export interface EmailData {
    to: string;
    subject: string;
    html: string;
}