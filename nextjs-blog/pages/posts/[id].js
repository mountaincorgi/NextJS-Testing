import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'


// Get post data
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    };
}


// Get possible dynamic route paths
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}


// getStaticPaths and getStaticProps work together like a key:value dictionary
// mapping page IDs to page content. Next.js does this magically!


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
            </article>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
        </Layout>
    );
}