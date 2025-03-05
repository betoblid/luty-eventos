import { Body, Button, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface ConfirmationEmailTemplateProps {
    name: string
    confirmationUrl: string
}

export const ConfirmationEmailTemplate = ({ name, confirmationUrl }: ConfirmationEmailTemplateProps) => {
    const previewText = `Confirme sua inscrição na Newsletter da Luty Eventos`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto p-8 max-w-2xl">
                        <Section className="bg-white rounded-lg p-8 shadow-lg">
                            <Heading className="text-2xl font-bold text-gray-900 mb-4">Confirme sua inscrição</Heading>

                            <Text className="text-gray-700 mb-6">
                                Olá {name}, estamos quase lá! Para começar a receber nossas newsletters, por favor confirme sua
                                inscrição clicando no botão abaixo:
                            </Text>

                            <Section className="mb-8 text-center">
                                <Button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium" href={confirmationUrl}>
                                    Confirmar Inscrição
                                </Button>
                            </Section>

                            <Text className="text-gray-700 mb-6">
                                Se o botão não funcionar, você também pode clicar no link abaixo:
                            </Text>

                            <Text className="text-sm text-gray-600 mb-8 break-all">
                                <Link href={confirmationUrl} className="text-red-600">
                                    {confirmationUrl}
                                </Link>
                            </Text>

                            <Hr className="border-gray-200 my-6" />

                            <Text className="text-sm text-gray-600">
                                Se você não se inscreveu para receber nossa newsletter, pode ignorar este e-mail.
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

