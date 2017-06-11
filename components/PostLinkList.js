import PostLink from './PostLink';

const PostLinkList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}><PostLink id={post.id} title={post.title} /></li>
    ))}
    <style jsx>{`
      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </ul>
);

export default PostLinkList;
