import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>Consultoria Nando Tavares</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
        <meta name="description" content="Oferecemos planos de consultoria personalizados com acesso a dietas criadas por nutricionistas e treinos desenvolvidos por personal trainers,
         tudo isso disponível via WhatsApp. Melhore sua saúde e transforme seu corpo com nossos serviços de consultoria. Contrate nossos planos!"/>
      </Head>
      <body className='bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
