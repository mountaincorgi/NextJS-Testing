import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";


// Get post data
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
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
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    );
}