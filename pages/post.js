import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Post = ({ url }) => (
  <Layout>
    <h1>{url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

export default Post;
