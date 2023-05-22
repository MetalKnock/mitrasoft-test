import { CommentsActionTypes } from 'src/constants/store';
import { Comments } from './common.types';

interface CommentsState {
  comments: Comments;
  loading: boolean;
  error: string | null;
}

interface FetchCommentsRequestAction {
  type: CommentsActionTypes.FETCH_COMMENTS_REQUEST;
  postId: number;
}

interface FetchCommentsSuccessAction {
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
  payload: Comments;
}

interface FetchCommentsRejectedAction {
  type: CommentsActionTypes.FETCH_COMMENTS_REJECTED;
  payload: string;
}

type CommentsAction =
  | FetchCommentsRequestAction
  | FetchCommentsSuccessAction
  | FetchCommentsRejectedAction;

type FetchCommentsRequest = (postId: number) => FetchCommentsRequestAction;
type FetchCommentsSuccess = (payload: Comments) => FetchCommentsSuccessAction;
type FetchCommentsRejected = (payload: string) => FetchCommentsRejectedAction;

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
