import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Página não encontrada</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        A página que você está procurando não existe ou foi removida. Por favor, verifique o endereço ou retorne à
        página inicial.
      </p>
      <Link href="/">
        <Button className="bg-red-600 hover:bg-red-700 text-white">Voltar para Home</Button>
      </Link>
    </div>
  )
}

