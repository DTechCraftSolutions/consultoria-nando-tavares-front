import axios from "axios"


export const getBilling = async (email:string) => {
    try {
        const response = await axios.get("/api/get_preaproval", {
            params: {
                payer_email: email
            }
        })
        return response.data
        
    } catch (error) {
        console.error(error)
        return "error"
    }
}