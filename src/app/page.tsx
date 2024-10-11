import Link from "next/link";
import { GoBack } from "@/components/goback";

export const metadata = {
  title: 'Componentes'
}

export default function Home() {
  return (
    <main className="w-full max-w-[1280px] grid grid-cols-4 gap-5 px-5 md:px-10 mt-20">

      <div className="col-span-12">
        <GoBack
          label="Componentes"
        />
      </div>

      <Link href='/navbar-pc' className="col-span-4 sm:col-span-2 md:col-span-1 bg-zinc-100 py-2 rounded-md hover:bg-zinc-300 transition-all duration-200">
        <p className="text-center text-md font-semibold">Navbar pc</p>
      </Link>

      <Link href='/navbar-mobile' className="col-span-4 sm:col-span-2 md:col-span-1 bg-zinc-100 py-2 rounded-md hover:bg-zinc-300 transition-all duration-200">
        <p className="text-center text-md font-semibold">Navbar mobile</p>
      </Link>

      <Link href='/modal' className="col-span-4 sm:col-span-2 md:col-span-1 bg-zinc-100 py-2 rounded-md hover:bg-zinc-300 transition-all duration-200">
        <p className="text-center text-md font-semibold">Modal</p>
      </Link>


    </main>
  );
}
