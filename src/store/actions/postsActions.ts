import { PostsActionTypes } from 'src/constants/store';
import { Posts } from 'src/types/common.types';

const getPosts = () => ({
  type: PostsActionTypes.GET_POSTS,
});

const setPosts = (payload: Posts) => ({
  type: PostsActionTypes.SET_POSTS,
  payload,
});

const setLoadingPosts = (payload: boolean) => ({
  type: PostsActionTypes.SET_LOADING_POSTS,
  payload,
});

const setErrorPosts = (payload: string) => ({
  type: PostsActionTypes.SET_ERROR_POSTS,
  payload,
});

export { getPosts, setPosts, setLoadingPosts, setErrorPosts };
