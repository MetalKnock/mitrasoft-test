import { PostsActionTypes } from 'src/constants/store';
import {
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

export { fetchPostsRequest, fetchPostsSuccess, fetchPostsRejected };
