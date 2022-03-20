import Head from 'next/head';
import Link from "../src/components/Link";

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
            .then(response => { 
                return response.json(); 
            })
    return {
        props: {
            faq
        }
    };
}

export default function FAQ({ faq }) {
    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - FAQ</h1>
            <Link href="/">
                Ir para Home
            </Link>
            <ul>
                {faq.map(item => {
                    return (
                        <article key={item.question}>
                            <h2>{item.question}</h2>
                            <p>{item.answer}</p>
                        </article>
                    )
                })}
            </ul>
        </div>
    )
}