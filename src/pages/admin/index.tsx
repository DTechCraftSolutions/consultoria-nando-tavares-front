import { app } from "@/lib/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoMdAlert, IoMdNotifications } from "react-icons/io";
import Cookies from "js-cookie";

import * as React from "react";

import { DataTableDemo, Payment } from "@/components/ui/data-table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/firebase-auth";
import { toast } from "react-toastify";
import { useQuery } from "@/graphql/config/swr.config";
import { FIND_ALL_USER } from "@/graphql/query/find-all-user";
import axios from "axios";
import { addMonths, format, set } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

export default function Admin() {
  const { data }: any = useQuery(FIND_ALL_USER);
  const [users, setUsers] = useState<Payment[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const timeOut = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  const validateStatusInPaymentsNoRecurrent = async ({ payment }: { payment: any }) => {
    const planValidationMonths = (title: string) => {
      if (title === "Plano Bimestral") {
        return 2
      }
      else {
        return 3
      }
    }
    const limitDate = addMonths(payment.date_created, planValidationMonths(payment.items[0].title));
    const planExpired = format(new Date(), "yyyy-MM-dd") > format(limitDate, "yyyy-MM-dd");
    if (planExpired) {

      setAlerts((prev) => [...prev, payment.id])
      return "Expirado"
    }
    return "Em dia"
  }

  const getIndividualPaymentInMercadoPago = async ({ id, recorrent, payment }: {
    id: string;
    recorrent: "S" | "N";
    payment: boolean
  }) => {
    if (recorrent === "N" && payment) {
      const response = await axios.get(`/api/get_preference?planId=${id}`)
      return response.data
    }
  };

  const getMercadoPagoData = async () => {
    let finalData: Payment[] = []
    const usersToGetPayments = data?.findAll;
    if (usersToGetPayments && usersToGetPayments.length > 0) {
      usersToGetPayments.map(async (user: any) => {
        const { planId, recorrent, payment } = user
        const paymentData = await getIndividualPaymentInMercadoPago({ id: planId, recorrent, payment })
        const data: Payment = {
          id: planId,
          amount: paymentData.items[0].unit_price,
          status: await validateStatusInPaymentsNoRecurrent({ payment: paymentData }),
          email: user.email,
          phone: user.phone,
          plan: paymentData.items[0].title,
        }
        console.log(data)
        finalData.push(data)
      })
    }
    setUsers(finalData)
  }
  const router = useRouter();
  const auth = getAuth(app);
  const authenticated = onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/admin/login");
    }
  });
  useEffect(() => {
    timeOut()
    if(users.length === 0){
      getMercadoPagoData()
    }
    return () => authenticated();
  }, [data]);

  console.log(alerts)
  return (
    <div className="w-full h-screen">
      <div className="w-full px-6 flex justify-between items-center bg-zinc-800 h-16">
        <Image src="/logo-reduzida.png" width={50} height={50} alt="logo" />
        <div className="flex items-center gap-5">
          <Popover>
            <PopoverTrigger
              className={`text-xl text-white ${alerts.length > 0
                ? "border-[0.5px] animate-pulse border-red-500"
                : ""
                } p-2 hover:bg-zinc-300 duration-200 rounded-lg`}
            >
              <IoMdNotifications
                className={`${alerts.length > 0
                  ? "text-red-500 animate-bounce duration-200"
                  : "text-white"
                  }`}
              />
            </PopoverTrigger>
            <PopoverContent className="bg-zinc-800 text-white">
              {
                alerts.length > 0 ?
                  <div className="flex max-h-72 overflow-y-scroll flex-col gap-2">
                    {alerts.map((alert) => {
                      const payment = users.find((user) => user.id === alert)
                      return <div className="" key={alert}>
                        <IoMdAlert className="text-red-500 animate-bounce duration-200" />
                        <p>o plano de {payment?.email} expirou, remova-o do grupo de whatsapp!</p>
                      </div>
                    })}
                  </div>
                  :
                  <div>Nenhum plano expirado</div>
              }
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="text-white hover hover:bg-zinc-300 duration-200 p-2 rounded-lg flex items-center gap-2">
              <FiUser />
              Nando Tavares
            </PopoverTrigger>
            <PopoverContent className="bg-zinc-800 text-white">
              <Image src="/logo-reduzida.png" width={20} height={20} alt="" />
              <p className="mt-2">
                Seja bem vindo ao painel de controle Consultoria Nando Tavares
              </p>
              <Button
                variant={"outline"}
                className="mt-2 hover:bg-zinc-700 gap-2 w-full"
                onClick={async () => {
                  const signOut = await logout();
                  if (signOut) {
                    return router.push("/admin/login");
                  }
                  return toast.error("Erro ao sair");
                }}
              >
                <LogOut className="w-5 h-5 text-white" />
                Sair
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <h2 className="text-3xl text-white p-5 font-bold">
          Painel de controle
        </h2>
        {isLoading ? (
          <div className="mt-4">
            <div className="flex items-center w-full justify-between">
              <Skeleton className="w-2/5 bg-zinc-500 h-10" />
              <Skeleton className="w-2/5 bg-zinc-500 h-10" />
            </div>
            <Skeleton className="w-full bg-zinc-500 h-72 mt-4" />
          </div>
        ) : (<DataTableDemo data={users} />)}
      </div>
    </div>
  );
}
