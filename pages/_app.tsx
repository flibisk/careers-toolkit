import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const title = "Work in Theatre | Careers Toolkit"
  const description = "Discover lesson ideas and career-day activities with this easy-to-use toolkit for exploring roles and responsibilities in theatre."
  const url = "https://careers-toolkit.vercel.app" // Update with your actual Vercel URL
  const image = "/images/wit-opengraph.png"

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Work in Theatre" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* WhatsApp / iMessage / SMS Link Previews */}
        <meta property="og:image:alt" content="Work in Theatre Careers Toolkit" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="theatre careers, education, careers toolkit, performing arts, theatre education, career guidance" />
        <meta name="author" content="ATG Entertainment Limited" />
        <link rel="canonical" href={url} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

