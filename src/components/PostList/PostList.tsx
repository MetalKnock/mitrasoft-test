import { Row } from 'react-bootstrap';
import { Posts } from 'src/types/common.types';
import { IDS_SKELETONS } from 'src/constants/common';
import { PostItem } from './Post';
import { SkeletonPost } from './SkeletonPost';

interface PostListProps {
  posts: Posts;
  loading: boolean;
  error: string | null;
}

export default function PostList({ posts, loading, error }: PostListProps) {
  return (
    <Row className='flex-grow-1'>
      {loading
        ? IDS_SKELETONS.map((id) => <SkeletonPost key={id} />)
        : posts.map((post) => <PostItem key={post.id} post={post} />)}
      {error && <h2>Posts not found</h2>}
    </Row>
  );
}
