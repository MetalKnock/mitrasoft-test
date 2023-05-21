import { Row, Spinner } from 'react-bootstrap';
import { Posts } from 'src/types/common.types';
import { PostItem } from './Post';

interface PostListProps {
  posts: Posts;
  loading: boolean;
}

export default function PostList({ posts, loading }: PostListProps) {
  if (loading) {
    return <Spinner className='m-auto' />;
  }

  return (
    <Row>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Row>
  );
}
