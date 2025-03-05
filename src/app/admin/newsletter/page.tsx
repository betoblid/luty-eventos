"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Save, Send } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import ReactMarkdown from "react-markdown"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
    title: z.string().min(5, { message: "Título deve ter pelo menos 5 caracteres" }),
    content: z.string().min(20, { message: "Conteúdo deve ter pelo menos 20 caracteres" }),
    preferenceIds: z.array(z.string()).min(1, { message: "Selecione pelo menos uma preferência" }),
    contentType: z.enum(["text", "markdown"]).default("markdown"),
})

type FormValues = z.infer<typeof formSchema>

interface Preference {
    id: string
    displayName: string
}

export default function AdminNewsletterPage() {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [preferences, setPreferences] = useState<Preference[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [previewTab, setPreviewTab] = useState<"edit" | "preview">("edit")
    const [error, setError] = useState<string | null>(null)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            preferenceIds: [],
            contentType: "markdown",
        },
    })

    const watchContent = form.watch("content")

    useEffect(() => {
        // Verificar se o usuário está autenticado
        if (status === "unauthenticated") {
            router.push("/admin/login?callbackUrl=" + encodeURIComponent("/admin/newsletter"))
            return
        }

        if (status === "authenticated") {
            if (session?.user?.role !== "admin") {
                toast.error("Acesso negado")
                router.push("/")
                return
            }

            // Buscar preferências
            async function fetchPreferences() {
                try {
                    setError(null)
                    const response = await fetch("/api/newsletter/preferences", {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        // Adicionar credenciais para enviar cookies de autenticação
                        credentials: "include",
                    })

                    if (!response.ok) {
                        if (response.status === 401) {
                            throw new Error("Não autorizado. Faça login novamente.")
                        }
                        throw new Error("Erro ao buscar preferências")
                    }

                    const data = await response.json()
                    setPreferences(data)
                } catch (error) {
                    console.error("Error fetching preferences:", error)
                    const message = error instanceof Error ? error.message : "Por favor, recarregue a página e tente novamente."
                    setError(message)
                    toast.error(message)
                } finally {
                    setIsLoading(false)
                }
            }

            fetchPreferences()
        }
    }, [toast, router, status, session])

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch("/api/newsletter/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Importante para enviar cookies de autenticação
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Sessão expirada. Faça login novamente.")
                }

                const errorData = await response.json()
                throw new Error(errorData.error || "Erro ao enviar newsletter")
            }

            const result = await response.json()

            toast.success("Newsletter enviada com sucesso!")

            form.reset()
        } catch (error) {
            const message = error instanceof Error ? error.message : "Por favor, tente novamente mais tarde."
            setError(message)
            toast.error("Erro ao enviar newsletter")
        } finally {
            setIsSubmitting(false)
        }
    }

    async function handleSaveDraft() {
        setIsSaving(true)
        setError(null)

        try {
            const data = form.getValues()

            const response = await fetch("/api/newsletter/draft", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Importante para enviar cookies de autenticação
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Sessão expirada. Faça login novamente.")
                }

                const errorData = await response.json()
                throw new Error(errorData.error || "Erro ao salvar rascunho")
            }

            const result = await response.json()

            toast.success("Rascunho salvo com sucesso!")
        } catch (error) {
            const message = error instanceof Error ? error.message : "Por favor, tente novamente mais tarde."
            setError(message)
            toast.error("Erro ao salvar rascunho")
        } finally {
            setIsSaving(false)
        }
    }

    if (status === "loading" || isLoading) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto flex justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-red-600" />
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Enviar Newsletter</h1>

                <Card>
                    <CardContent className="p-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Título da Newsletter</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Digite o título da newsletter" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Tabs
                                    defaultValue="edit"
                                    value={previewTab}
                                    onValueChange={(value) => setPreviewTab(value as "edit" | "preview")}
                                    className="w-full"
                                >
                                    <TabsList className="mb-2">
                                        <TabsTrigger value="edit">Editar</TabsTrigger>
                                        <TabsTrigger value="preview">Visualizar</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="edit">
                                        <FormField
                                            control={form.control}
                                            name="content"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Conteúdo (Markdown)</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            rows={15}
                                                            placeholder="Digite o conteúdo da newsletter em formato Markdown..."
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </TabsContent>
                                    <TabsContent value="preview">
                                        <div className="border rounded-md p-4 min-h-[300px] prose max-w-none">
                                            <ReactMarkdown>{watchContent}</ReactMarkdown>
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                <FormField
                                    control={form.control}
                                    name="preferenceIds"
                                    render={() => (
                                        <FormItem>
                                            <FormLabel>Enviar para assinantes com as seguintes preferências:</FormLabel>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                                                {preferences.map((item) => (
                                                    <FormField
                                                        key={item.id}
                                                        control={form.control}
                                                        name="preferenceIds"
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

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full sm:w-auto"
                                        onClick={handleSaveDraft}
                                        disabled={isSaving}
                                    >
                                        {isSaving ? (
                                            <div className="flex items-center space-x-2">
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                <span>Salvando...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center space-x-2">
                                                <Save className="h-4 w-4" />
                                                <span>Salvar Rascunho</span>
                                            </div>
                                        )}
                                    </Button>

                                    <Button
                                        type="submit"
                                        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center space-x-2">
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                <span>Enviando...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center space-x-2">
                                                <Send className="h-4 w-4" />
                                                <span>Enviar Newsletter</span>
                                            </div>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

