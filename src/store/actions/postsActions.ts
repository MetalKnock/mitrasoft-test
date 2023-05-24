import { PostsActionTypes } from 'src/constants/store';
import {
  FetchPostsCurrentUserRejected,
  FetchPostsCurrentUserRequest,
  FetchPostsCurrentUserSuccess,
  FetchPostsRejected,
  FetchPostsRequest,
  FetchPostsSuccess,
} from 'src/types/storePosts.types';

const fetchPostsRequest: FetchPostsRequest = () => ({
  type: PostsActionTypes.FETCH_POSTS_REQUEST,
});

const fetchPostsSuccess: FetchPostsSuccess = (payload) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload,
});

const fetchPostsRejected: FetchPostsRejected = (payload) => ({
  type: PostsActionTypes.FETCH_POSTS_REJECTED,
  payload,
});

const fetchPostsCurrentUserRequest: FetchPostsCurrentUserRequest = (userId) => ({
  type: PostsActionTypes.FETCH_POSTS_CURRENT_USER_REQUEST,
  userId,
});

const fetchPostsCurrentUserSuccess: FetchPostsCurrentUserSuccess = (payload) => ({
  type: PostsActionTypes.FETCH_POSTS_CURRENT_USER_SUCCESS,
  payload,
});

const fetchPostsCurrentUserRejected: FetchPostsCurrentUserRejected = (payload) => ({
  type: PostsActionTypes.FETCH_POSTS_CURRENT_USER_REJECTED,
  payload,
});

export {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsRejected,
  fetchPostsCurrentUserRequest,
  fetchPostsCurrentUserSuccess,
  fetchPostsCurrentUserRejected,
};
