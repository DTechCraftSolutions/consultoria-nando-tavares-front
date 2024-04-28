import Image from "next/image";

interface QuestionBoxProps {
    imageSrc: string;
    question: string;
}

export function QuestionBox({imageSrc, question, }:QuestionBoxProps) {
    return (
        <div 
            className="w-full  text-white mt-16">
            <div className="w-32 h-32 bg-[#E63940] rounded-lg mx-auto flex justify-center items-center">
            <Image
                src={imageSrc}
                width={100}
                height={100}
                alt="halter" 
               />
            </div>
            <h4 
                className="mx-auto w-full text-center mt-3 text-2xl font-semibold">
                {question}
            </h4>
        </div>
    )
}