import dedent from 'dedent';
import fetch from 'isomorphic-unfetch';
import Heading from '../components/Heading.js';
import Layout from '../components/Layout.js';
import MarkdownPost from '../components/MarkdownPost';
import { fonts } from '../theme';

const Post = ({ url }) => (
  <Layout>
    <Heading level={1}>{url.query.title}</Heading>

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
