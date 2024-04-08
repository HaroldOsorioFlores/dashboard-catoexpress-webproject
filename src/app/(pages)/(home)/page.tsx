import Image from "next/image";

import { CatoexpressLogo, LoginFormModal } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-24 shrink-0 items-end rounded-lg bg-green-700 p-4 md:h-52">
        <CatoexpressLogo className="md:h-[8rem] md:w-[16rem] h-[4rem] w-[8rem] " fill="#FFFFFF" />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={` text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Bienvenido a Catoexpress.</strong> Inicia sesion para ingresar tus productos
          </p>
          <LoginFormModal />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/images/dashboardImage.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block h-auto 2xl:max-w-4xl xl:max-w-3xl object-cover sm:max-w-96"
            priority
          />
          <Image
            src="/images/dashboardResponsiveImage.png"
            width={560}
            height={620}
            alt="Screenshot of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
