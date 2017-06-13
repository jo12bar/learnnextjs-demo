import fetch from 'isomorphic-unfetch';
import getPosts from '../util/getPosts';
import Heading from '../components/Heading.js';
import Layout from '../components/Layout';
import Link from 'next/link';
import PostLinkList from '../components/PostLinkList';
import { fonts } from '../theme';

const Index = () => (
  <Layout>
    <Heading level={1}>My Blog</Heading>
    <PostLinkList posts={getPosts()} />
  </Layout>
);

export default Index;
