import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium.replace(/^http:\/\//i, 'https://')} />
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
}

export default Post;
