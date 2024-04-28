import { SetStateAction } from "react";
import { FiMail } from "react-icons/fi";

interface EmailInputProps{
    email: string,
    setEmail: (value: SetStateAction<string>) => void,
}

export function EmailInput({email, setEmail}:EmailInputProps){
    return (
        <div className="relative">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full md:w-3/5 px-4 py-3 rounded-md bg-zinc-900 border-transparent text-zinc-300 border-2 focus:duration-500 focus:transition-all focus:ease-linear focus:outline-none  focus:border-2 focus:border-white focus:ring-0"
                            placeholder="Digite seu email"
                            required
                        />
                        <div className="absolute inset-y-0 right-0 md:right-[330px] xl:right-[460px] flex items-center px-2 pointer-events-none">
                            <FiMail className="text-gray-400" />
                        </div>
                    </div>
        
    )
}