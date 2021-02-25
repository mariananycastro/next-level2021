import Document, { Html, Head, Main, NextScript } from 'next/document';

//  este arquivo será carregada uma unica vez
//  ja no _app ele é recalculado, apesar de ser reaproveitado
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* adiciona favicon  */}
          {/* <link rel='shorcut icon' href=.. type="image/png" /> */}

          {/* para importar fonte fechar com /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}