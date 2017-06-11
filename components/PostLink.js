import Link from 'next/link';

const PostLink = ({ id, title }) => (
  <Link as={`/p/${id}`} href={`/post?title=${title}`}>
    <a>{title}</a>
  </Link>
);

export default PostLink;
