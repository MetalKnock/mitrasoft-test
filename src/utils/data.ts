import { Comments } from 'src/types/common.types';

const getFilteredCommentsByPostId = (comments: Comments, id: number) =>
  comments.filter((comment) => comment.postId === id);

const findFirstCommentByPostId = (comments: Comments, id: number) =>
  comments.find((comment) => comment.postId === id);

export { getFilteredCommentsByPostId, findFirstCommentByPostId };
