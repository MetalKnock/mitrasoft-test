import { PostsActionTypes } from 'src/constants/store';

import { PostsAction, PostsState } from 'src/types/storePosts.types';

const initialState: PostsState = {
  posts: [],
  postsCurrentUser: [],
  loading: false,
  error: null,
};

const posts = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false, error: null };
    case PostsActionTypes.FETCH_POSTS_REJECTED:
      return { ...state, posts: [], loading: false, error: action.payload };
    case PostsActionTypes.FETCH_POSTS_CURRENT_USER_REQUEST:
      return { ...state, loading: true };
    case PostsActionTypes.FETCH_POSTS_CURRENT_USER_SUCCESS:
      return { ...state, postsCurrentUser: action.payload, loading: false, error: null };
    case PostsActionTypes.FETCH_POSTS_CURRENT_USER_REJECTED:
      return { ...state, postsCurrentUser: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export { posts };
