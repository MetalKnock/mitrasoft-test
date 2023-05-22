import { Accordion, Card, Col, Image, Spinner, Stack } from 'react-bootstrap';
import { Post } from 'src/types/common.types';
import { RoutePath } from 'src/constants/common';
import { Link } from 'react-router-dom';
import { CommentList } from 'src/components/CommentList';
import { CustomToggle } from 'src/components/CustomToggle';
import { fetchCommentsRequest } from 'src/store/actions/commentsActions';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import AvatarIcon from 'src/assets/avatar.svg';
import { findFirstCommentByPostId, getFilteredCommentsByPostId } from 'src/utils/data';

interface PostProps {
  post: Post;
}

export default function PostItem({ post }: PostProps) {
  const { userId, body, title, id } = post;

  const { comments, loading } = useAppSelector((store) => store.comments);
  const dispatch = useDispatch();

  const handleGetComments = async () => {
    if (findFirstCommentByPostId(comments, id) === undefined) {
      dispatch(fetchCommentsRequest(id));
    }
  };

  const currentPostComments = getFilteredCommentsByPostId(comments, id);

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <Stack direction='horizontal' gap={3}>
            <Link to={`${RoutePath.user}/${userId}`}>
              <Image src={AvatarIcon} width={50} height={50} />
            </Link>
            <Card.Title>{title}</Card.Title>
          </Stack>
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Accordion>
            <CustomToggle eventKey={String(id)} callback={handleGetComments}>
              {loading && currentPostComments.length === 0 ? (
                <Stack direction='horizontal' gap={2}>
                  <Spinner as='span' size='sm' />
                  <span>Loading...</span>
                </Stack>
              ) : (
                'Comments'
              )}
            </CustomToggle>
            <Accordion.Collapse eventKey={String(id)}>
              {/* {loading && currentPostComments.length === 0 ? (
                <Spinner />
              ) : (
                <CommentList comments={currentPostComments} />
              )} */}
              <CommentList comments={currentPostComments} />
            </Accordion.Collapse>
          </Accordion>
        </Card.Footer>
      </Card>
    </Col>
  );
}
