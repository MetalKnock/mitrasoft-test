import { Card } from 'react-bootstrap';

import { Comment } from 'src/types/common.types';

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  const { email, body } = comment;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{email}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
