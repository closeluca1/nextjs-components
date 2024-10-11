"use client";
import { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-200"
                    onClick={toggleMenu}
                />
            )}

            {
                !isOpen && (
                    <nav className="p-4">
                        <button
                            onClick={toggleMenu}
                            className="text-white bg-blue-500 px-4 py-2 rounded"
                        >
                            Menu
                        </button>
                    </nav>
                )
            }

            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } w-64`}
            >
                <div className="p-4">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 float-right focus:outline-none"
                    >
                        &#x2715;
                    </button>

                    <div
                        className={`mt-10 transition-opacity duration-300 delay-200 ${isOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <ul>
                            <li className="mb-4">
                                <a href="#home" className="text-gray-800">
                                    início
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#services" className="text-gray-800">
                                    contato
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#about" className="text-gray-800">
                                    sobre-nós
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-800">
                                    blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
