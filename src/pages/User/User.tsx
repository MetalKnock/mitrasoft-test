import { useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PostList } from 'src/components/PostList';
import { UserCard } from 'src/components/UserCard';
import { RoutePath } from 'src/constants/common';
import { useAppSelector } from 'src/hooks/useAppSelector';
import {
  fetchPostsCurrentUserRequest,
  fetchPostsCurrentUserSuccess,
} from 'src/store/actions/postsActions';
import { fetchUsersRequest } from 'src/store/actions/usersActions';
import { filteredPostsByCurrentUser } from 'src/utils/data';

export default function User() {
  const { posts, postsCurrentUser, loading } = useAppSelector((store) => store.posts);
  const { users } = useAppSelector((store) => store.users);
  const dispatch = useDispatch();

  const { userId } = useParams();
  const userIdNumber = Number(userId);

  useEffect(() => {
    if (users.find((user) => user.id === userIdNumber) === undefined) {
      dispatch(fetchUsersRequest(userIdNumber));
    }
  }, [dispatch, userIdNumber, users]);

  useEffect(() => {
    if (posts.find((post) => post.userId === userIdNumber) === undefined) {
      dispatch(fetchPostsCurrentUserRequest(userIdNumber));
    } else {
      dispatch(fetchPostsCurrentUserSuccess(filteredPostsByCurrentUser(posts, userIdNumber)));
    }
  }, [dispatch, posts, userIdNumber]);

  return (
    <Container>
      <Row className='mt-3' direction='horizontal' gap={3}>
        <Col className='position-relative'>
          <Stack className='position-fixed mt-3 w-25 mh-50 justify-content-between' gap={3}>
            <UserCard />
            <Link className='d-flex flex-grow-1' to={RoutePath.main}>
              <Button>Back</Button>
            </Link>
          </Stack>
        </Col>
        <Col>
          <PostList posts={postsCurrentUser} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}
