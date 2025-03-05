import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img as Image,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface NewsletterTemplateProps {
    name: string
    unsubscribeUrl: string
    content: {
        title: string
        description: string
        isHtml?: boolean
        image?: string
        link?: string
    }[]
}

export const NewsletterTemplate = ({ name, unsubscribeUrl, content }: NewsletterTemplateProps) => {
    const previewText = `Newsletter Luty Eventos - ${content[0].title}`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-gray-100 font-sans">
                    <Container className="mx-auto p-8 max-w-2xl">
                        <Section className="bg-white rounded-lg p-8 shadow-lg">
                            <Heading className="text-2xl font-bold text-gray-900 mb-4">Olá, {name}!</Heading>

                            <Text className="text-gray-700 mb-6">Confira as últimas novidades da Luty Eventos:</Text>

                            {content.map((item, index) => (
                                <Section key={index} className="mb-8">
                                    {item.image && (
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            width="552"
                                            height="300"
                                            className="rounded-lg mb-4"
                                        />
                                    )}
                                    <Heading className="text-xl font-bold text-gray-900 mb-2">{item.title}</Heading>
                                    {item.isHtml ? (
                                        <div dangerouslySetInnerHTML={{ __html: item.description }} className="text-gray-700 mb-4" />
                                    ) : (
                                        <Text className="text-gray-700 mb-4">{item.description}</Text>
                                    )}
                                    {item.link && (
                                        <Section className="text-center">
                                            <Button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium" href={item.link}>
                                                Saiba mais
                                            </Button>
                                        </Section>
                                    )}
                                </Section>
                            ))}

                            <Hr className="border-gray-200 my-6" />

                            <Text className="text-sm text-gray-600">
                                Você está recebendo este e-mail porque se inscreveu em nossa newsletter.{" "}
                                <Link href={unsubscribeUrl} className="text-red-600 underline">
                                    Cancelar inscrição
                                </Link>
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

