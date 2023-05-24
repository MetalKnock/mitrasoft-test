import { useEffect } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
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
import styles from './User.module.css';

export default function User() {
  const { posts, postsCurrentUser, loading, error } = useAppSelector((store) => store.posts);
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container>
      <Row className={`${styles.row} mt-3`} gap={3}>
        <Col className='position-relative d-flex'>
          <Stack className={`${styles.stackUser} mt-3 w-25 mh-50 justify-content-between`} gap={3}>
            <UserCard />
            <Link className='d-flex flex-grow-1 flex-column' to={RoutePath.main}>
              <Button>Back</Button>
            </Link>
          </Stack>
        </Col>
        <Col>
          <PostList posts={postsCurrentUser} loading={loading} error={error} />
        </Col>
      </Row>
    </Container>
  );
}
