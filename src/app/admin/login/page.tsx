"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
    email: z.string().email({ message: "E-mail inválido" }),
    password: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
})

type FormValues = z.infer<typeof formSchema>

export default function AdminLoginPage() {

    const router = useRouter()
    const { status } = useSession()
    const searchParams = useSearchParams()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Obter erro da URL se existir
    useEffect(() => {
        const errorParam = searchParams.get("error")
        if (errorParam) {
            setError("Ocorreu um erro na autenticação. Por favor, tente novamente.")
        }

        const callbackUrl = searchParams.get("callbackUrl")
        if (callbackUrl) {
            toast.info("Autenticação necessária")
        }
    }, [searchParams, toast])

    // Redirecionar se já estiver autenticado
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/admin/newsletter")
        }
    }, [status, router])

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        setError(null)

        try {
            const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard"

            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            })

            if (result?.error) {
                setError("Credenciais inválidas. Verifique seu e-mail e senha.")
                return
            }

            toast.success("Login realizado com sucesso!")

            router.push(callbackUrl)
        } catch (error) {
            setError("Ocorreu um erro ao fazer login. Por favor, tente novamente.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (status === "loading") {
        return (
            <div className="container mx-auto px-4 py-16 flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-red-600" />
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-md mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Login Administrativo</CardTitle>
                        <CardDescription className="text-center">Acesse o painel administrativo da Luty Eventos</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="admin@exemplo.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Senha</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="******" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <div className="flex items-center space-x-2">
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            <span>Entrando...</span>
                                        </div>
                                    ) : (
                                        "Entrar"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

