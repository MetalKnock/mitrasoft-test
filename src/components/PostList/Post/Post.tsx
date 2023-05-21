import { Card, Col } from 'react-bootstrap';
import { Post } from 'src/types/common.types';
import AvatarIcon from 'src/assets/avatar.svg';
import { RoutePath } from 'src/constants/common';
import { Link } from 'react-router-dom';

interface PostProps {
  post: Post;
}

export default function PostItem({ post }: PostProps) {
  const { userId, body, title } = post;

  return (
    <Col>
      <Card>
        <Card.Header>
          <Link to={`${RoutePath.user}/${userId}`}>
            <Card.Img variant='top' src={AvatarIcon} />
          </Link>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
