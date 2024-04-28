import { signIn } from "@/lib/firebase-auth";
import { app } from "@/lib/firebase-config";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

export default function Login() {
    const [security, setSecurity] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth(app)

    const authenticated = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push("/admin")
        }
      })
      useEffect(() => {
        return () => authenticated()
      }, [auth])

    const router = useRouter()
    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault()
        const auth = await signIn(email, password)
        if (auth) {
            router.push("/admin")
        }
        else {
            toast.error("Usuário ou senha inválidos")
        }
    }
    return (
        <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2 hidden lg:flex justify-center items-center h-full">
                <Image src="/Logo.png" width={250} height={300} alt="logo"/>
            </div>
            <div className="h-full bg-home flex flex-col justify-center bg-cover bg-no-repeat">
                <div className="w-full text-white bg-gradient h-full">
                    <h2 className="flex items-center mt-10 gap-2 font-bold text-2xl w-full justify-center">
                        <FiUser />
                        Login do Administrador
                    </h2>
                    <form onSubmit={handleSignIn} className="w-3/5 mt-32 mx-auto" action="">
                        <label className="mt-5">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded text-black px-4 bg-white h-12 focus:ring-2 outline-none duration-500 focus:shadow focus:shadow-[#E63940] focus:ring-[#E63940]" />
                        <label className="mt-5">Senha</label>
                        <div className="flex rounded items-center bg-white  text-black">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={security ? "text" : "password"} required className="w-[87%] rounded px-4 bg-white h-12 focus:ring-2 outline-none duration-500 focus:shadow focus:shadow-[#E63940] focus:ring-[#E63940]" />
                            {
                                security ? <FiEye className=" text-xl cursor-pointer ml-2" onClick={() => setSecurity(!security)} /> : <FiEyeOff className="cursor-pointer ml-2 text-xl " onClick={() => setSecurity(!security)} />
                            }
                        </div>
                        <button  type="submit" className="w-full mt-5 bg-[#E63940] duration-500 hover:bg-[#f97b7f] hover:ease-in-out h-12 rounded-md hover:shadow-2xl">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}