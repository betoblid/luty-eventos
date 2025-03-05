import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface EmailTemplateProps {
    name: string
    email: string
    phone: string
    company?: string
    observations?: string
    services?: string[]
}

export const EmailTemplate = ({ name, email, phone, company, observations, services }: EmailTemplateProps) => {
    const previewText = `Nova solicitação de orçamento de ${name}`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto p-8 max-w-2xl">
                        <Section className="bg-white rounded-lg p-8 shadow-lg">
                            <Heading className="text-2xl font-bold text-gray-900 mb-4">Nova Solicitação de Orçamento</Heading>

                            <Text className="text-gray-700 mb-6">
                                Recebemos uma nova solicitação de orçamento através do site. Confira os detalhes abaixo:
                            </Text>

                            <Section className="mb-6">
                                <Heading className="text-lg font-semibold text-gray-900 mb-4">Dados do Cliente</Heading>
                                <Text className="text-gray-700 mb-2">
                                    <strong>Nome:</strong> {name}
                                </Text>
                                <Text className="text-gray-700 mb-2">
                                    <strong>E-mail:</strong> {email}
                                </Text>
                                <Text className="text-gray-700 mb-2">
                                    <strong>Telefone:</strong> {phone}
                                </Text>
                                {company && (
                                    <Text className="text-gray-700 mb-2">
                                        <strong>Empresa:</strong> {company}
                                    </Text>
                                )}
                            </Section>

                            {services && services.length > 0 && (
                                <Section className="mb-6">
                                    <Heading className="text-lg font-semibold text-gray-900 mb-4">Serviços Solicitados</Heading>
                                    <ul className="list-disc pl-6">
                                        {services.map((service, index) => (
                                            <li key={index} className="text-gray-700 mb-1">
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </Section>
                            )}

                            {observations && (
                                <Section className="mb-6">
                                    <Heading className="text-lg font-semibold text-gray-900 mb-4">Observações</Heading>
                                    <Text className="text-gray-700 whitespace-pre-wrap">{observations}</Text>
                                </Section>
                            )}

                            <Hr className="border-gray-200 my-6" />

                            <Text className="text-sm text-gray-600">
                                Este é um e-mail automático enviado pelo sistema da Luty Eventos. Por favor, não responda a este e-mail.
                            </Text>
                        </Section>

                        <Section className="text-center mt-8">
                            <Text className="text-sm text-gray-600">
                                © {new Date().getFullYear()} Luty Eventos. Todos os direitos reservados.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

