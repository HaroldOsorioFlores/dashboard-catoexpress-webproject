import { TableUsers } from "@/components";
import { transformUrl } from "@/utils";

export default function Users() {
  return (
    <main className="p-4 sm:ml-64">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
        Usuarios
      </h1>
      <TableUsers />
    </main>
  );
}
