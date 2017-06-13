import dedent from 'dedent';
import fetch from 'isomorphic-unfetch';
import H1 from '../components/H1.js';
import Layout from '../components/Layout.js';
import MarkdownPost from '../components/MarkdownPost';
import { fonts } from '../theme';

const Post = ({ url }) => (
  <Layout>
    <H1>{url.query.title}</H1>

    <MarkdownPost source={dedent`
      This is our blog post.
      Yes. We can have a [link](/link).
      And we can have a title as well.

      ### This is a title.

      And here's the content.
    `} />
  </Layout>
);

export default Post;
