import '@/assets/scss/index.scss';

import Menu from '@/components/menu/index.js'
import Header from '@/components/header/index.js'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Menu />
    </>
  )
}
