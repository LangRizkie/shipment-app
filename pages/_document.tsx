import Document, { Head, Html, Main, NextScript } from 'next/document'
import { LinkModel } from '../models/link.module'

const links: Array<LinkModel> = [
  {
    href: 'https://fonts.googleapis.com',
    rel: 'preconnect'
  },
  {
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect'
  }
]

class PageDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='id'>
        <Head>
          {
            links.map((link, index) =>
              <link key={index} href={link.href} rel={link.rel}></link>
            )
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default PageDocument