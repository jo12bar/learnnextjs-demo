import PostLink from './PostLink';

const PostLinkList = ({ shows }) => (
  <ul>
    {shows.map((show) => (
      <li key={show.id}><PostLink id={show.id} name={show.name} /></li>
    ))}
  </ul>
);

export default PostLinkList;
