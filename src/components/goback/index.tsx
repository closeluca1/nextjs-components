"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface GobackProps {
    label: string;
}

export const GoBack: React.FC<GobackProps> = ({ label }) => {
    const pathname = usePathname(); // Obtendo o pathname

    return (
        <div className="w-full flex flex-row items-center justify-between mb-10">
            <h1 className="text-2xl font-semibold">{label}</h1>
            {
                pathname !== '/' && ( // Usando pathname diretamente
                    <Link href='/'>Voltar</Link>
                )
            }
        </div>
    )
}
