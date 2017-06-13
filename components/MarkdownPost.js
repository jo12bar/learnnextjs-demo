import Heading from './Heading';
import AnchorLink from './AnchorLink';
import Markdown from 'react-markdown';
import { styled } from 'styletron-react';
import { fonts } from '../theme';

const markdownCustomRenderers = {
  heading: Heading,
  link: AnchorLink,
};

const MarkdownPost = (props) =>
  <Markdown
    {...props}
    renderers={markdownCustomRenderers}
    className={`${props.className} x-custom-markdown-post-styled`}
  />;

export default styled(MarkdownPost, {
  fontFamily: fonts.default,
});
