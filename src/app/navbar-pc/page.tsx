"use client";
import Navbar from "@/components/navbarpc";
import { GoBack } from "@/components/goback";

export const metadata = {
    title: 'Componente Navbar pc'
}

export default function NavbarPage() {
    return (
        <div className="w-full max-w-[1280px] px-5 md:px-10 mt-20">
            <GoBack
                label="Navbar pc"
            />
            <Navbar />
        </div>
    )
}