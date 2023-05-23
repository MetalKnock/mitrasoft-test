import { PostsActionTypes } from 'src/constants/store';
import { Posts } from './common.types';

interface PostsState {
  posts: Posts;
  postsCurrentUser: Posts;
  loading: boolean;
  error: string | null;
}

interface FetchPostsRequestAction {
  type: PostsActionTypes.FETCH_POSTS_REQUEST;
}

interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: Posts;
}

interface FetchPostsRejectedAction {
  type: PostsActionTypes.FETCH_POSTS_REJECTED;
  payload: string;
}

interface FetchPostsCurrentUserRequestAction {
  type: PostsActionTypes.FETCH_POSTS_CURRENT_USER_REQUEST;
  userId: number;
}

interface FetchPostsCurrentUserSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_CURRENT_USER_SUCCESS;
  payload: Posts;
}

interface FetchPostsCurrentUserRejectedAction {
  type: PostsActionTypes.FETCH_POSTS_CURRENT_USER_REJECTED;
  payload: string;
}

type PostsAction =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsRejectedAction
  | FetchPostsCurrentUserRequestAction
  | FetchPostsCurrentUserSuccessAction
  | FetchPostsCurrentUserRejectedAction;

type FetchPostsRequest = () => FetchPostsRequestAction;
type FetchPostsSuccess = (payload: Posts) => FetchPostsSuccessAction;
type FetchPostsRejected = (payload: string) => FetchPostsRejectedAction;
type FetchPostsCurrentUserRequest = (userId: number) => FetchPostsCurrentUserRequestAction;
type FetchPostsCurrentUserSuccess = (payload: Posts) => FetchPostsCurrentUserSuccessAction;
type FetchPostsCurrentUserRejected = (payload: string) => FetchPostsCurrentUserRejectedAction;

export type {
  PostsState,
  FetchPostsRequestAction,
  FetchPostsSuccessAction,
  FetchPostsRejectedAction,
  FetchPostsCurrentUserRequestAction,
  FetchPostsCurrentUserSuccessAction,
  FetchPostsCurrentUserRejectedAction,
  PostsAction,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsRejected,
  FetchPostsCurrentUserRequest,
  FetchPostsCurrentUserSuccess,
  FetchPostsCurrentUserRejected,
};
