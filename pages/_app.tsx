import type { AppProps } from 'next/app'
import '../src/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (<Component {...pageProps}/>)

export default MyApp
