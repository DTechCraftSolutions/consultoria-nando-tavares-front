import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "./firebase-config";

export const signIn = async (email: string, password: string) => {

    const auth = getAuth(app);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response.user
    }
    catch (error) {
        console.log(error)
        toast.error("Usuário ou senha inválido");
    };
}

export const logout = async () => {
    const auth = getAuth(app);
    try {
        await signOut(auth)
        return true
    }
    catch (error) {
        console.log(error)
        return false
    }
}