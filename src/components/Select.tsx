"use client"
import { Popover, Transition } from '@headlessui/react'
import { useState } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"


interface SelectProps {
    question: string;
    topic1: string;
    topic2?: string;
    topic3?: string;
    h: "sm" | "md" ;

}

export function Select({question, topic1, topic2, topic3, h}:SelectProps) {
    const [selected, setSelected] = useState(false)
    return (
        <Popover 
        >
            <Popover.Button                
                onClick={() => setSelected(!selected)}
                className="w-full py-2  cursor-pointer z-20 focus:border-none bg-zinc-900 rounded-md justify-between text-white px-4 text-xl flex items-center outline-none">
                <p className='text-start w-auto'>
                    {question}
                </p>
                {
                    selected ? <IoMdArrowDropup className="w-8 h-8 " />
                        : <IoMdArrowDropdown className="w-8 h-8" />
                }

            </Popover.Button>
            <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-500 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className={`${h === "sm" ? "h-40" : "h-56"} w-full absolute border border-white z-30 bg-black backdrop-blur-lg  px-3 pt-5 rounded-b-lg`}>
                    <div className="flex absolute">
                        <ul className='flex flex-col  text-white gap-2 uppercase'>
                            <li>
                                {topic1}
                            </li>
                            <li>
                                {topic2}
                            </li>
                            <li>
                                {topic3}
                            </li>
                        </ul>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}