import AnchorLink from './AnchorLink';
import { fonts } from '../theme';

const PostLink = ({ id, title }) => (
  <AnchorLink as={`/p/${id}`} href={`/post?title=${title}`}>
    {title}
  </AnchorLink>
);

export default PostLink;
