import dedent from 'dedent';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import Markdown from 'react-markdown';
import { fonts } from '../theme';

const Post = ({ url }) => (
  <Layout>
    <h1>{url.query.title}</h1>

    <div className='markdown'>
      <Markdown source={dedent`
        This is our blog post.
        Yes. We can have a [link](/link).
        And we can have a title as well.

        ### This is a title.

        And here's the content.
      `} />
    </div>

    <style jsx global>{`
      .markdown {
        font-family: ${fonts.default};
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: .6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);

export default Post;
