import Link from 'next/link';
import { fonts } from '../theme';

const PostLink = ({ id, title }) => (
  <span>
    <Link as={`/p/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
    <style jsx>{`
      a {
        font-family: ${fonts.default};
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: .6;
      }
    `}</style>
  </span>
);

export default PostLink;
