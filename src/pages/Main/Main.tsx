import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PostList } from 'src/components/PostList';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { fetchPostsRequest } from 'src/store/actions/postsActions';

export default function Main() {
  const { posts, loading } = useAppSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPostsRequest());
    }
  }, [dispatch, posts]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container className='d-flex'>
      <PostList posts={posts} loading={loading} />
    </Container>
  );
}
