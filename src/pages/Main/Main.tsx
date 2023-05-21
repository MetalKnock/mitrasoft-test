import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PostList } from 'src/components/PostList';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { getPosts } from 'src/store/actions/postsActions';

export default function Main() {
  const { posts, loading } = useAppSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <PostList posts={posts} loading={loading} />
    </Container>
  );
}
