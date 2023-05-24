import { Row } from 'react-bootstrap';
import { Posts } from 'src/types/common.types';
import { IDS_SKELETONS } from 'src/constants/common';
import { PostItem } from './Post';
import { SkeletonPost } from './SkeletonPost';

interface PostListProps {
  posts: Posts;
  loading: boolean;
}

export default function PostList({ posts, loading }: PostListProps) {
  return (
    <Row className='flex-grow-1'>
      {loading
        ? IDS_SKELETONS.map((id) => <SkeletonPost key={id} />)
        : posts.map((post) => <PostItem key={post.id} post={post} />)}
    </Row>
  );
}
