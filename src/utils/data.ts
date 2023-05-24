import { Comments, Posts } from 'src/types/common.types';

const getFilteredCommentsByPostId = (comments: Comments, id: number) =>
  comments.filter((comment) => comment.postId === id);

const findFirstCommentByPostId = (comments: Comments, id: number) =>
  comments.find((comment) => comment.postId === id);

const filteredPostsByCurrentUser = (posts: Posts, id: number) =>
  posts.filter((post) => post.userId === id);

export { getFilteredCommentsByPostId, findFirstCommentByPostId, filteredPostsByCurrentUser };
