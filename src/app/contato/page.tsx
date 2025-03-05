"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
    company: z.string().optional(),
    message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContatoPage() {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Erro ao enviar mensagem")
            }

            toast.success("Mensagem enviada com sucesso!")

            form.reset()
        } catch (error) {
            toast.error("Erro ao enviar mensagem")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Contato</h1>
                <nav className="text-sm mb-8">
                    <ol className="flex">
                        <li className="flex items-center">
                            <a href="/" className="text-red-600 hover:underline">
                                Home
                            </a>
                            <span className="mx-2 text-gray-500">›</span>
                        </li>
                        <li className="text-gray-700">Contato</li>
                    </ol>
                </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Luty Eventos</h2>
                            <div className="prose max-w-none mb-8 text-gray-700">
                                <p>
                                    Entre em contato conosco para mais informações sobre nossos serviços ou para solicitar um orçamento
                                    personalizado. Nossa equipe está pronta para atendê-lo e ajudar a tornar seu evento um sucesso.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <MapPin className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Endereço:</h3>
                                        <p className="text-gray-700">
                                            Rua dos Eventos, nº 123, Edifício Centro Empresarial, Sala 101
                                            <br />
                                            Salvador/BA - CEP 40.000-000
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <Phone className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Telefone:</h3>
                                        <p className="text-gray-700">
                                            <a href="tel:+557196185243" className="hover:text-red-600 transition-colors">
                                                (71) 9618-5243
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <Mail className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">E-mail:</h3>
                                        <p className="text-gray-700">
                                            <a href="mailto:atendimento@lutyeventos.com.br" className="hover:text-red-600 transition-colors">
                                                atendimento@lutyeventos.com.br
                                            </a>
                                            <br />
                                            <a href="mailto:comercial@lutyeventos.com.br" className="hover:text-red-600 transition-colors">
                                                comercial@lutyeventos.com.br
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <Clock className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento:</h3>
                                        <p className="text-gray-700">Segunda a Sexta, das 08h às 18h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31192.76428431755!2d-38.45191444649658!3d-12.991169726720329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1579f9497f%3A0x1899c80c3c7c1d88!2sSalvador%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1709595547436!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Envie sua mensagem</h2>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Nome <span className="text-red-600">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        E-mail <span className="text-red-600">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input type="email" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Telefone <span className="text-red-600">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Empresa</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Mensagem <span className="text-red-600">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea rows={5} placeholder="Digite sua mensagem aqui..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            <Button
                                                type="submit"
                                                className="w-full bg-red-600 hover:bg-red-700 text-white"
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
                                                        <span>Enviar Mensagem</span>
                                                    </div>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </AnimatePresence>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

