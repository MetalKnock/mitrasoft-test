import { PostsActionTypes } from 'src/constants/store';

import { PostsAction, PostsState } from 'src/types/storePosts.types';

const initialState: PostsState = {
  posts: [],
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
    default:
      return state;
  }
};

export { posts };
