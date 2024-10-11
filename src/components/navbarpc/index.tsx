"use client";
import Link from 'next/link';

const Navbar: React.FC = () => {

    return (
        <nav className='w-full max-w-[1280px]'>

            <ul className='w-full grid grid-cols-12 gap-5'>
                <li className='col-span-1 text-md font-normal group'>
                    <Link href="/" className='group-hover:font-bold'>
                        Início
                    </Link>
                    <div className="bg-orange-500 h-1 w-2 transition-all duration-200 group-hover:w-14"></div>
                </li>
                <li className='col-span-1 text-md font-normal group'>
                    <Link href="/about" className='group-hover:font-bold'>
                        Sobre
                    </Link>
                    <div className="bg-orange-500 h-1 w-2 transition-all duration-200 group-hover:w-14"></div>
                </li>
                <li className='col-span-1 text-md font-normal group'>
                    <Link href="/contact" className='group-hover:font-bold'>
                        Contato
                    </Link>
                    <div className="bg-orange-500 h-1 w-2 transition-all duration-200 group-hover:w-14"></div>
                </li>
            </ul>


        </nav>
    );
};

export default Navbar;
