import { Body, Button, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface WelcomeEmailTemplateProps {
    name: string
    preferences: string[]
    unsubscribeUrl: string
}

export const WelcomeEmailTemplate = ({ name, preferences, unsubscribeUrl }: WelcomeEmailTemplateProps) => {
    const previewText = `Bem-vindo à Newsletter da Luty Eventos, ${name}!`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto p-8 max-w-2xl">
                        <Section className="bg-white rounded-lg p-8 shadow-lg">
                            <Heading className="text-2xl font-bold text-gray-900 mb-4">
                                Bem-vindo à Newsletter da Luty Eventos!
                            </Heading>

                            <Text className="text-gray-700 mb-6">
                                Olá {name}, obrigado por se inscrever em nossa newsletter! Estamos muito felizes em tê-lo(a) conosco.
                            </Text>

                            <Section className="mb-6">
                                <Heading className="text-lg font-semibold text-gray-900 mb-4">Suas preferências de conteúdo:</Heading>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    {preferences.map((pref, index) => (
                                        <Text key={index} className="text-gray-700 mb-2">
                                            ✓ {pref}
                                        </Text>
                                    ))}
                                </div>
                            </Section>

                            <Text className="text-gray-700 mb-6">
                                Você receberá conteúdo exclusivo sobre os temas selecionados. Fique atento(a) à sua caixa de entrada!
                            </Text>

                            <Section className="mb-8 text-center">
                                <Button
                                    className="bg-red-600 text-white px-6 py-3 rounded-md font-medium"
                                    href="https://lutyeventos.com.br/eventos"
                                >
                                    Ver Próximos Eventos
                                </Button>
                            </Section>

                            <Hr className="border-gray-200 my-6" />

                            <Text className="text-sm text-gray-600">
                                Se você não se inscreveu para receber nossa newsletter, pode ignorar este e-mail ou{" "}
                                <Link href={unsubscribeUrl} className="text-red-600 underline">
                                    cancelar sua inscrição
                                </Link>
                                .
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

