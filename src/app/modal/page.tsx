"use client";

import { useState } from "react";
import Modal from "@/components/modal";
import { GoBack } from "@/components/goback";


export default function NavbarPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-full max-w-[1280px] px-5 md:px-10 mt-20">

            <GoBack
                label="Modal"
            />

            <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
                Abrir Modal
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Este é o conteúdo do modal</h2>
                <p>Coloque aqui qualquer informação que deseja exibir</p>
            </Modal>
        </div>
    )
}