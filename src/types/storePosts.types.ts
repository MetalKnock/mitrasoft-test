import { PostsActionTypes } from 'src/constants/store';
import { Posts } from './common.types';

interface PostsState {
  posts: Posts;
  loading: boolean;
  error: string | null;
}

interface GetPostsAction {
  type: PostsActionTypes.GET_POSTS;
}

interface SetPostsAction {
  type: PostsActionTypes.SET_POSTS;
  payload: Posts;
}

interface SetLoadingPostsAction {
  type: PostsActionTypes.SET_LOADING_POSTS;
  payload: boolean;
}

interface SetErrorPostsAction {
  type: PostsActionTypes.SET_ERROR_POSTS;
  payload: string;
}

type PostsAction = GetPostsAction | SetPostsAction | SetLoadingPostsAction | SetErrorPostsAction;

export type { PostsState, PostsAction };
