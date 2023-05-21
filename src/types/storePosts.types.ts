import { PostsActionTypes } from 'src/constants/store';
import { Posts } from './common.types';

interface PostsState {
  posts: Posts;
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

type PostsAction = FetchPostsRequestAction | FetchPostsSuccessAction | FetchPostsRejectedAction;

type FetchPostsRequest = () => FetchPostsRequestAction;
type FetchPostsSuccess = (payload: Posts) => FetchPostsSuccessAction;
type FetchPostsRejected = (payload: string) => FetchPostsRejectedAction;

export type {
  PostsState,
  FetchPostsRequestAction,
  FetchPostsSuccessAction,
  FetchPostsRejectedAction,
  PostsAction,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsRejected,
};
