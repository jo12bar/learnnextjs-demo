import fetch from 'isomorphic-unfetch';
import getPosts from '../util/getPosts';
import Layout from '../components/Layout';
import Link from 'next/link';
import PostLinkList from '../components/PostLinkList';

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <PostLinkList posts={getPosts()} />
  </Layout>
);

export default Index;
