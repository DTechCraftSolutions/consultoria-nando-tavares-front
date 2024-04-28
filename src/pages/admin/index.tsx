import { app } from "@/lib/firebase-config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FiUser } from "react-icons/fi"
import { IoMdNotifications } from "react-icons/io"

import * as React from "react"

import { DataTableDemo, Payment } from "@/components/ui/data-table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { logout } from "@/lib/firebase-auth"
import { toast } from "react-toastify"

export default function Admin() {
  const [alerts, setAlerts] = useState([])
  const plans: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "Em dia",
      email: "ken99@yahoo.com",
      phone: "9999999999",
      plan: "Plano mensal",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "Em dia",
      email: "Abe45@gmail.com",
      phone: "9999999999",
      plan: "Plano bimestral",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "Expirado",
      email: "Monserrat44@gmail.com",
      phone: "9999999999",
      plan: "Plano trimestral",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "Em dia",
      email: "Silas22@gmail.com",
      phone: "9999999999",
      plan: "Plano mensal",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "Em dia",
      email: "carmella@hotmail.com",
      phone: "9999999999",
      plan: "Plano mensal",
    },
  ]
  const router = useRouter()
  const auth = getAuth(app)
  const authenticated = onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/admin/login")
    }
  })
  useEffect(() => {
    return () => authenticated()
  }, [])
  return (
    <div className="w-full h-screen">
      <div className="w-full px-6 flex justify-between items-center bg-zinc-800 h-16">
        <Image src="/logo-reduzida.png" width={50} height={50} alt="logo" />
        <div className="flex items-center gap-5">
          <Popover>
            <PopoverTrigger className={`text-xl text-white ${alerts.length > 0 ? "border-[0.5px] animate-pulse border-red-500" : ""} p-2 hover:bg-zinc-300 duration-200 rounded-lg`}>
              <IoMdNotifications className={`${alerts.length > 0 ? "text-red-500 animate-bounce duration-200" : "text-white"}`} />
            </PopoverTrigger>
            <PopoverContent className="bg-zinc-800 text-white">
              <p>Nenhum alerta!</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="text-white hover hover:bg-zinc-300 duration-200 p-2 rounded-lg flex items-center gap-2">
              <FiUser />
              Nando Tavares
            </PopoverTrigger>
            <PopoverContent className="bg-zinc-800 text-white">
              <Image src="/logo-reduzida.png" width={20} height={20} alt="" />
              <p className="mt-2">Seja bem vindo ao painel de controle Consultoria Nando Tavares</p>
              <Button variant={"outline"} className="mt-2 hover:bg-zinc-700 gap-2 w-full" onClick={async () => {
                const signOut = await logout()
                if (signOut) {
                  return router.push("/admin/login")
                }
                return toast.error("Erro ao sair")
              }}>
                <LogOut className="w-5 h-5 text-white" />
                Sair
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <h2 className="text-3xl text-white p-5 font-bold">Painel de controle</h2>
        <DataTableDemo data={plans} />
      </div>
    </div>
  )
}