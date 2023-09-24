import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                {/* execute script immediately, but load order is unclear*/}
                {/* <script src="https://connect.facebook.net/en_US/sdk.js"></script> */}
            </Head>
            {/* best way to add a script in NextJS */}
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnLoad"
                onLoad={() => console.log(`FB script loaded correctly!`)}
            />
            <h1>This is my first post!</h1>
        </Layout>
    )
}