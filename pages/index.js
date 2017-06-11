import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Link from 'next/link';
import PostLinkList from '../components/PostLinkList';

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <PostLinkList shows={shows} />
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  const shows = data.map((datum) => datum.show);

  console.log(`Show data fetched. Count: ${data.length}`);

  return { shows };
};

export default Index;
