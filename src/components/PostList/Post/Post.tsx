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

  const { comments, isLoadingPostIds } = useAppSelector((store) => store.comments);
  const dispatch = useDispatch();

  const handleGetComments = async () => {
    if (findFirstCommentByPostId(comments, id) === undefined) {
      dispatch(fetchCommentsRequest(id));
    }
  };

  const currentPostComments = getFilteredCommentsByPostId(comments, id);

  return (
    <Col xs={12}>
      <Card className='my-3'>
        <Card.Header>
          <Link to={`${RoutePath.user}/${userId}`}>
            <Image src={AvatarIcon} width={50} height={50} roundedCircle />
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Accordion>
            <CustomToggle className='mt-2 mb-2' eventKey={String(id)} callback={handleGetComments}>
              {isLoadingPostIds.find((isLoadingPostId) => isLoadingPostId === id) ? (
                <Stack direction='horizontal' gap={2}>
                  <Spinner as='span' size='sm' />
                  <span>Loading...</span>
                </Stack>
              ) : (
                'Comments'
              )}
            </CustomToggle>
            <Accordion.Collapse eventKey={String(id)}>
              <CommentList comments={currentPostComments} />
            </Accordion.Collapse>
          </Accordion>
        </Card.Footer>
      </Card>
    </Col>
  );
}
