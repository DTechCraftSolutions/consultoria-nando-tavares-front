import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export function BackButton() {
    return (
        <Link href="/">
            <button className="absolute hover:bg-gray-500 text-gray-600 hover:text-black hover:duration-500 top-6 left-6 p-2 bg-gray-300 rounded-full">
                <FiArrowLeft className="" />
            </button>
        </Link>
    );
}