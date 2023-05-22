import { Comments } from 'src/types/common.types';
import { CommentItem } from './CommentItem';

interface CommentListProps {
  comments: Comments;
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
}
