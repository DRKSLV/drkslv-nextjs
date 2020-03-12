// /pages/_app.js
import App from 'next/app'

class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props

        const getLayout = Component.getLayout || (page => page)

        return getLayout(<Component {...pageProps}></Component>)
    }
}

export default MyApp