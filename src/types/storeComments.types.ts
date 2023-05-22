import { CommentsActionTypes } from 'src/constants/store';
import { Comments } from './common.types';

interface CommentsState {
  comments: Comments;
  isLoadingPostIds: number[];
  error: string | null;
}

interface FetchCommentsRequestAction {
  type: CommentsActionTypes.FETCH_COMMENTS_REQUEST;
  postId: number;
}

interface FetchCommentsSuccessAction {
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
  postId: number;
  payload: Comments;
}

interface FetchCommentsRejectedAction {
  type: CommentsActionTypes.FETCH_COMMENTS_REJECTED;
  postId: number;
  payload: string;
}

type CommentsAction =
  | FetchCommentsRequestAction
  | FetchCommentsSuccessAction
  | FetchCommentsRejectedAction;

type FetchCommentsRequest = (postId: number) => FetchCommentsRequestAction;
type FetchCommentsSuccess = (postId: number, payload: Comments) => FetchCommentsSuccessAction;
type FetchCommentsRejected = (postId: number, payload: string) => FetchCommentsRejectedAction;

export type {
  CommentsState,
  FetchCommentsRequestAction,
  FetchCommentsSuccessAction,
  FetchCommentsRejectedAction,
  CommentsAction,
  FetchCommentsRequest,
  FetchCommentsSuccess,
  FetchCommentsRejected,
};
