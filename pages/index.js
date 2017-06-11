import fetch from 'isomorphic-unfetch';
import getPosts from '../util/getPosts';
import Layout from '../components/Layout';
import Link from 'next/link';
import PostLinkList from '../components/PostLinkList';
import { fonts } from '../theme';

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <PostLinkList posts={getPosts()} />

    <style jsx>{`
      h1 {
        font-family: ${fonts.default};
      }
    `}</style>
  </Layout>
);

export default Index;
