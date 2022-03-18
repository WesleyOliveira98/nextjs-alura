import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}