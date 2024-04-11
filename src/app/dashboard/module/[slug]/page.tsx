import { TableProducts } from "@/components"
import { transformUrl } from "@/utils"

export default function Module({ params }: { params: { slug: string } }) {
  const nameModule = transformUrl(params.slug)
  return <main className="p-4 sm:ml-64">
    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
      {nameModule}
    </h1>
    <TableProducts />
  </main>
}
