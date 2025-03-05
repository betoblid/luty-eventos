"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2, Mail, Send } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "E-mail inválido" }),
    preferences: z.array(z.string()).min(1, { message: "Selecione pelo menos uma preferência" }),
})

type FormValues = z.infer<typeof formSchema>

interface Preference {
    id: string
    displayName: string
}

export function NewsletterSubscribeForm() {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [preferences, setPreferences] = useState<Preference[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            preferences: [],
        },
    })

    useEffect(() => {
        async function fetchPreferences() {
            try {
                const response = await fetch("/api/newsletter/preferences")
                if (!response.ok) {
                    throw new Error("Erro ao buscar preferências")
                }
                const data = await response.json()
                setPreferences(data)
            } catch (error) {
                console.error("Error fetching preferences:", error)
                toast("Erro ao carregar preferências")
            } finally {
                setIsLoading(false)
            }
        }

        fetchPreferences()
    }, [toast])

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Erro ao se inscrever")
            }

            toast.info("Quase lá!")

            form.reset()

            if (response.ok) {
                toast.success(result.message)
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "Por favor, tente novamente mais tarde."
            toast.error(message)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoading) {
        return (
            <Card className="w-full max-w-md mx-auto">
                <CardContent className="p-6 flex justify-center items-center h-40">
                    <Loader2 className="h-8 w-8 animate-spin text-red-600" />
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                    <Mail className="h-6 w-6 text-red-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Newsletter</h2>
                </div>

                <p className="text-gray-700 mb-6">
                    Cadastre-se para receber novidades, dicas e informações exclusivas sobre eventos.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Seu nome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="seu@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="preferences"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Preferências de conteúdo</FormLabel>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                                        {preferences.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="preferences"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(field.value?.filter((value) => value !== item.id))
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="text-sm font-normal">{item.displayName}</FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <AnimatePresence>
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <div className="flex items-center space-x-2">
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            <span>Inscrevendo...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <Send className="h-4 w-4" />
                                            <span>Inscrever-se</span>
                                        </div>
                                    )}
                                </Button>
                            </motion.div>
                        </AnimatePresence>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

