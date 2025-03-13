"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"



const formSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
    company: z.string().optional(),
    observations: z.string().optional(),
    services: z.array(z.string()).optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function OrcamentoPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            observations: "",
            services: [],
        },
    })

    const toggleService = (service: string) => {
        setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))

        const currentServices = form.getValues().services || []
        if (currentServices.includes(service)) {
            form.setValue(
                "services",
                currentServices.filter((s) => s !== service),
            )
        } else {
            form.setValue("services", [...currentServices, service])
        }
    }

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    services: selectedServices,
                }),
            })

            if (!response.ok) {
                throw new Error("Erro ao enviar o formulário")
            }

            toast.success("Orçamento solicitado com sucesso!")

            form.reset()
            setSelectedServices([])
        } catch (error) {
            toast.error("Erro ao solicitar orçamento")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Solicitar Orçamento</h1>
                <nav className="text-sm mb-8">
                    <ol className="flex">
                        <li className="flex items-center">
                            <a href="/" className="text-red-600 hover:underline">
                                Home
                            </a>
                            <span className="mx-2 text-gray-500">›</span>
                        </li>
                        <li className="text-gray-700">Orçamento</li>
                    </ol>
                </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <Card className="mb-8">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-6 text-gray-900">Selecione os serviços desejados</h2>

                                <Accordion type="single" collapsible>
                                    {serviceCategories.map((category, categoryIndex) => (
                                        <AccordionItem key={categoryIndex} value={category.name}>
                                            <AccordionTrigger className="text-lg font-semibold text-red-600">
                                                {category.name}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                                    {category.services.map((service, serviceIndex) => (
                                                        <div
                                                            key={serviceIndex}
                                                            className={cn(
                                                                "flex items-center space-x-2 p-3 rounded-lg transition-colors",
                                                                "hover:bg-gray-50 cursor-pointer",
                                                                selectedServices.includes(service) && "bg-red-50",
                                                            )}
                                                            onClick={() => toggleService(service)}
                                                        >
                                                            <Checkbox
                                                                id={`service-${categoryIndex}-${serviceIndex}`}
                                                                checked={selectedServices.includes(service)}
                                                                onCheckedChange={() => toggleService(service)}
                                                                className="border-gray-400 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                                                            />
                                                            <label
                                                                htmlFor={`service-${categoryIndex}-${serviceIndex}`}
                                                                className="text-sm cursor-pointer text-gray-700 flex-1"
                                                            >
                                                                {service}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
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
                                <h2 className="text-xl font-bold mb-6 text-gray-900">Seus dados para contato</h2>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Nome <span className="text-red-600">*</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="name" autoComplete="name" />
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
                                                        <FormLabel>
                                                            E-mail <span className="text-red-600">*</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input type="email" {...field} autoComplete="email" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Telefone <span className="text-red-600">*</span>
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input {...field} autoComplete="tel" type="tel" maxLength={15} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="company"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Empresa</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} type="name" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="observations"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Observações</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            rows={5}
                                                            placeholder="Descreva aqui detalhes adicionais sobre seu evento..."
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button
                                            type="submit"
                                            className="w-full bg-red-600 hover:bg-red-700 text-white"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center space-x-2">
                                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                                    <span>Enviando...</span>
                                                </div>
                                            ) : (
                                                "Solicitar Orçamento"
                                            )}
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="lg:col-span-1"
                >
                    <Card className="sticky top-8">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-bold mb-6 text-gray-900">Seu Orçamento</h2>

                            <AnimatePresence>
                                {selectedServices.length > 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Serviços selecionados:</h3>
                                            <ul className="space-y-2">
                                                {selectedServices.map((service, index) => (
                                                    <motion.li
                                                        key={service}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 10 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="flex items-center text-sm text-gray-700 bg-gray-50 p-2 rounded"
                                                    >
                                                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                                        {service}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">
                                                Preencha seus dados de contato para receber um orçamento personalizado com os serviços
                                                selecionados.
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-gray-500 mb-4">Nenhum serviço selecionado</p>
                                        <p className="text-sm text-gray-600">
                                            Selecione os serviços desejados para receber um orçamento personalizado.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

const serviceCategories = [
    {
        name: "Buffet",
        services: ["Buffet Completo", "Coffee Break", "Coquetel", "Finger Food", "Open Bar", "Bartenders", "Garçons e Copeiras", "Espaço"],
    },
    {
        name: "Decoração",
        services: [
            "Decoração Temática",
            "Arranjos Florais",
            "Cenografia",
            "Balões e Elementos Decorativos",
            "Decoração de Mesa",

        ],
    },
    {
        name: "Espaço",
        services: [
            "Salão de Festas",
            "Chácara e Sítio",
            "Casa de Festas",
            "Restaurante",
            "Hotel",
            "Praia",
            "Campo",
            "Igreja",
            "Salão de Convenções",
            "Espaço para Eventos",
        ]
    },
    {
        name: "Garçons e Copeiras",
        services: [
            "Garçons",
            "Copeiras",
            "Bartenders",
            "Seguranças",
            "Recepcionistas",
            "Manobristas",
            "Limpeza",
            "Monitoramento",
            "Brigadistas",
        ]
    },
    {
        name: "Estrutura e Iluminação",
        services: ["Palco e Estruturas", "Iluminação Cênica", "Tendas e Coberturas", "Geradores", "Climatização", "banheiro químico"],
    },
    {
        name: "DJs e Bandas",
        services: ["DJ Profissional", "Bandas ao Vivo", "Música Ambiente", "Karaokê", "Apresentadores", "Cerimonialistas"],
    },
    {
        name: "Fotografia e Filmagem",
        services: ["Fotografia Profissional", "Filmagem e Edição", "Drone", "Cabine de Fotos", "Transmissão ao Vivo", "Telão e Projetores", "Som e Iluminação", "Painel de LED", "fogos de artifício",],
    },
    {
        name: "Locação de Móveis",
        services: [
            "Móveis para Eventos",
            "Lounges e Ambientação",
            "Mesas e Cadeiras",
            "Toalhas e Capas",
            "Prataria e Louças",
            "Copos e Talheres",
            "Acessórios para Buffet",

        ],
    },
]

