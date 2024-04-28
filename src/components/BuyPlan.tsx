import Link from "next/link";

interface BuyPlanProps {
    link: string;
    price: string;
    duration: string;
    description: string;
    name: string;
}

export function BuyPlan({link, price, duration, description, name }: BuyPlanProps) {
    return (
        <div className="flex flex-col p-5 justify-between items-start sm:w-full md:w-3/4 lg:w-1/2 sm:px-4 md:px-6 lg:px-8 sm:py-4 md:py-6 lg:py-8 text-white text-start bg-zinc-950 uppercase">
            <h3 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl">
                {name}
            </h3>
            <p className="mt-1 sm:mt-2 md:mt-2 lg:mt-3">
                R$
                <span className="text-xl sm:text-2xl">
                    {price}
                </span>
                <span className="">
                    / {duration}
                </span>
            </p>
            <p className="mt-1 sm:mt-2 md:mt-2 lg:mt-3">
                {description}
            </p>
            <Link href={link}>
                <button className="uppercase mt-2 bg-[#E63940] w-32 py-1">
                    Selecionar
                </button>
            </Link>
        </div>
    )
}