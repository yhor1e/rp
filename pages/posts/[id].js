import Layout from "../../components/layout";
import {
  getSortedPostsData,
  getAllPostIds,
  getPostData,
} from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";

export default function Post({ postData, allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <ul>
        {allPostsData.map(({ id }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{id}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
