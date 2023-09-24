// _app.js is a top-level compopnent that wraps ALL pages
// * keep state when navigating between pages
// * add global styles
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
