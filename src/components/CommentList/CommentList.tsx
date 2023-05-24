import { Stack } from 'react-bootstrap';
import { Comments } from 'src/types/common.types';
import { CommentItem } from './CommentItem';

interface CommentListProps {
  comments: Comments;
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <Stack gap={2}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </Stack>
  );
}
