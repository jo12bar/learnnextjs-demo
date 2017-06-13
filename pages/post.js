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

      And here's the content

      We're using \`react-markdown\`, which in turn uses
      \`commonmark-react-renderer\`. So, let's take a look at all the CommonMark
      goodies at our disposal, shall we?

      *Italic*

      _Alternate Italic_

      **Bold**

      __Alternate Bold__

      # Heading 1

      Alternate Heading 1
      ===================

      ## Heading 2

      Alternate Heading 2
      -------------------

      ### Heading 3

      #### Heading 4

      ##### Heading 5

      ###### Heading 6

      [Link](https://example.com)

      [Alternate Link][alternate-link]

      [alternate-link]: https://example.com

      ![Image](https://unsplash.it/300/200/?random)

      > "Blockquote"
      >
      > &mdash; Morgan Freeman or someone like that

      A paragraph.

      A paragraph after 1 blank line.

      * List
      * List
      * List

      - Alternate List
      - Alternate List
      - Alternate List

      1. One
      2. Two
      3. Three

      1) One
      2) Two
      3) Three

      Horizontal rule coming up!

      ---

      Oooh! Here's another one! It just looks different...

      ***

      \`Inline.code()\` with backticks

      \`\`\`js
      // Code block!
      // If syntax highlighting is set up, then this should look like JavaScript

      console.log('This one is made with 3 backticks.');
      \`\`\`

          # Another code block!
          # (But no syntax highlighting...)

          echo 'This one is made with 4 spaces.'

      # That's all folks!
    `} />
  </Layout>
);

export default Post;
