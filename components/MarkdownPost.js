import Markdown from 'react-markdown';
import { styled } from 'styletron-react';
import { fonts } from '../theme';
if (typeof window !== 'undefined') { window.global = window.global || {}; window.global['test'] = require('react-markdown'); }
const MarkdownPost = (props) => (
  <div>
    <Markdown
      {...props}
      className={`${props.className} x-custom-markdown-post-styled`}
    />

    <style jsx global>{`
      .x-custom-markdown-post-styled a {
        text-decoration: none;
        color: blue;
      }

      .x-custom-markdown-post-styled a:hover {
        opacity: .6;
      }

      .x-custom-markdown-post-styled h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </div>
);

export default styled(MarkdownPost, {
  fontFamily: fonts.default,
});
