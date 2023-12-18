import type {AppProps} from "next/app"
import type {LayoutProps} from "@vercel/examples-ui/layout"

import {getLayout} from "@vercel/examples-ui"
import "@vercel/examples-ui/globals.css"

function App({Component, pageProps}: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout path={""} title='Culture Builder App' description='MYM Slack App'>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
