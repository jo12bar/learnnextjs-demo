import Layout from '../components/Layout';
import PostLinkList from '../components/PostLinkList';

const posts = [
  { id: 'hello-nextjs', title: 'Hello Next.js' },
  { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
  { id: 'deploy-nextjs', title: 'Deploy apps with Zeit' },
];

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <PostLinkList posts={posts} />
  </Layout>
);

export default Index;
