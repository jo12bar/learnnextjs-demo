import Link from 'next/link';

const PostLink = ({ id, name }) => (
  <Link as={`/p/${id}`} href={`/post?id=${id}`}>
    <a>{name}</a>
  </Link>
);

export default PostLink;
