"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
    email: z.string().email({ message: "E-mail inválido" }),
    name: z.string().max(30).min(3, { message: "Nome inválido" }),
})

type FormValues = z.infer<typeof formSchema>

export function FooterSubscribeForm() {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        try {
            // Buscar o nome do usuário do formulário principal se disponível

            // Usar preferências padrão para inscrições via footer
            // Normalmente, todos receberiam todas as atualizações
            const preferences = ["a87ff679a2f3e71d9181a67b7542122c", "c4ca4238a0b923820dcc509a6f75849b", "c81e728d9d4c2f636f067f89cc14862c", "e4da3b7fbbce2345d7772b0674a318d5"]

            const response = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    preferences,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Erro ao se inscrever")
            }

            toast.info("Quase lá!")

            toast.success(result.message || "Inscrição realizada com sucesso!")

            form.reset()
        } catch (error) {
            const message = error instanceof Error ? error.message : "Por favor, tente novamente mais tarde."
            toast.error(message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="name"
                                    autoComplete="name"
                                    placeholder="Seu Nome"
                                    className="bg-white text-gray-800 rounded-r-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xs text-white" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Seu e-mail"
                                    className="bg-white text-gray-800 rounded-r-none"
                                    {...field}
                                />

                            </FormControl>
                            <FormMessage className="text-xs text-white" />
                        </FormItem>
                    )}
                />
                <div className="flex">
                    <Button
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-900 text-white rounded-l-none"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Enviando..." : "Inscrever-se"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

