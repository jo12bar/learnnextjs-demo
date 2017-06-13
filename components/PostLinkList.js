import PostLink from './PostLink';
import { styled } from 'styletron-react';

const StyledPostLinkList = styled('ul', {
  padding: 0,
});

const StyledPostLinkListItem = styled('li', {
  listStyle: 'none',
  margin: '5px 0',
});

const PostLinkList = ({ posts }) => (
  <StyledPostLinkList>
    {posts.map((post) => (
      <StyledPostLinkListItem key={post.id}>
        <PostLink id={post.id} title={post.title} />
      </StyledPostLinkListItem>
    ))}
  </StyledPostLinkList>
);

export default PostLinkList;
