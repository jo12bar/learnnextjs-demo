import PostLink from './PostLink';

const PostLinkList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}><PostLink id={post.id} title={post.title} /></li>
    ))}
  </ul>
);

export default PostLinkList;
