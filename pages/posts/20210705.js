import Head from "next/head";
import Links from "../../components/links";
import Layout from "../../components/layout";

export default function First() {
  return (
    <Layout>
      <Head>
        <title>20210705</title>
      </Head>
      <Links />
      <p>First Post</p>
    </Layout>
  );
}
