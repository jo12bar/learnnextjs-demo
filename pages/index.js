import fetch from 'isomorphic-unfetch';
import getPosts from '../util/getPosts';
import H1 from '../components/H1.js';
import Layout from '../components/Layout';
import Link from 'next/link';
import PostLinkList from '../components/PostLinkList';
import { fonts } from '../theme';

const Index = () => (
  <Layout>
    <H1>My Blog</H1>
    <PostLinkList posts={getPosts()} />
  </Layout>
);

export default Index;
