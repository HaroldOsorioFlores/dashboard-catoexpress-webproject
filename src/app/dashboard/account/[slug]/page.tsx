import { Mail, MapPin, Phone } from "lucide-react";

export default function Account({ params }: { params: { slug: string } }) {
  return (
    <main className="py-4 px-7 sm:ml-64">
      <section className="grid md:grid-cols-5 gap-7">
        <div className="flex flex-col gap-5 border border-gray-100 rounded-lg py-7 px-14 md:col-span-3 shadow-md">
          <h3 className="text-center font-semibold text-xl">
            Datos Personales
          </h3>
          <div className="space-y-3">
            <h5 className="font-semibold">Nombres</h5>
            <p className="pl-5 text-sm">Daniel Delmi</p>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold">Apellidos</h5>
            <p className="pl-5 text-sm">Diaz Ruiz</p>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold">Modulo</h5>
            <p className="pl-5 text-sm">Ceprobis</p>
          </div>
        </div>
        <div className="flex flex-col gap-7 md:col-span-2">
          <div className="border border-gray-100 rounded-lg p-7 flex items-center gap-5 shadow-md">
            <Mail className="fill-primary-700 stroke-gray-200 w-7 h-7" />
            <div className="space-y-2">
              <h3 className="font-bold">Correo Electronico</h3>
              <p className="text-sm">daniel.diaz@ucsm.edu.pe</p>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-7 flex items-center gap-5 shadow-md">
            <Phone className="fill-primary-700 stroke-gray-200 w-7 h-7" />
            <div className="space-y-2">
              <h3 className="font-bold">Telefono</h3>
              <p className="text-sm">+51 990 040 009</p>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-7 flex items-center gap-5 shadow-md">
            <MapPin className="fill-primary-700 stroke-gray-200 w-7 h-7" />
            <div className="space-y-2">
              <h3 className="font-bold">Ubicación</h3>
              <p className="text-sm">Edificio S</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
