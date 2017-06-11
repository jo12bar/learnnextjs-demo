import Layout from '../components/Layout.js';

const Content = ({ url }) => (
  <div>
    <h1>{url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

const Post = ({ url }) => (
  <Layout>
    <Content url={url} />
  </Layout>
);

export default Post;
