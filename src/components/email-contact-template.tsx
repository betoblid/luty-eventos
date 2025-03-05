import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface ContactEmailTemplateProps {
    name: string
    email: string
    phone: string
    company?: string
    message: string
    isConfirmation?: boolean
}

export const ContactEmailTemplate = ({
    name,
    email,
    phone,
    company,
    message,
    isConfirmation = false,
}: ContactEmailTemplateProps) => {
    const previewText = isConfirmation
        ? `Obrigado por entrar em contato, ${name}!`
        : `Nova mensagem de contato de ${name}`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto p-8 max-w-2xl">
                        <Section className="bg-white rounded-lg p-8 shadow-lg">
                            {isConfirmation ? (
                                <>
                                    <Heading className="text-2xl font-bold text-gray-900 mb-4">Recebemos sua mensagem!</Heading>
                                    <Text className="text-gray-700 mb-6">
                                        Olá {name}, obrigado por entrar em contato com a Luty Eventos. Recebemos sua mensagem e retornaremos
                                        em breve.
                                    </Text>
                                    <Section className="mb-6 bg-gray-50 p-4 rounded-lg">
                                        <Heading className="text-lg font-semibold text-gray-900 mb-4">Sua mensagem:</Heading>
                                        <Text className="text-gray-700 whitespace-pre-wrap">{message}</Text>
                                    </Section>
                                    <Text className="text-gray-700">
                                        Se precisar de atendimento imediato, você pode nos ligar no telefone (71) 99999-9999.
                                    </Text>
                                </>
                            ) : (
                                <>
                                    <Heading className="text-2xl font-bold text-gray-900 mb-4">Nova Mensagem de Contato</Heading>
                                    <Text className="text-gray-700 mb-6">
                                        Uma nova mensagem foi recebida através do formulário de contato do site.
                                    </Text>
                                    <Section className="mb-6">
                                        <Heading className="text-lg font-semibold text-gray-900 mb-4">Dados do Contato</Heading>
                                        <Text className="text-gray-700 mb-2">
                                            <strong>Nome:</strong> {name}
                                        </Text>
                                        <Text className="text-gray-700 mb-2">
                                            <strong>E-mail:</strong>{" "}
                                            <Link href={`mailto:${email}`} className="text-red-600">
                                                {email}
                                            </Link>
                                        </Text>
                                        <Text className="text-gray-700 mb-2">
                                            <strong>Telefone:</strong>{" "}
                                            <Link href={`tel:${phone}`} className="text-red-600">
                                                {phone}
                                            </Link>
                                        </Text>
                                        {company && (
                                            <Text className="text-gray-700 mb-2">
                                                <strong>Empresa:</strong> {company}
                                            </Text>
                                        )}
                                    </Section>
                                    <Section className="mb-6">
                                        <Heading className="text-lg font-semibold text-gray-900 mb-4">Mensagem</Heading>
                                        <Text className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{message}</Text>
                                    </Section>
                                </>
                            )}
                            <Hr className="border-gray-200 my-6" />
                            <Text className="text-sm text-gray-600 text-center">
                                © {new Date().getFullYear()} Luty Eventos. Todos os direitos reservados.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

