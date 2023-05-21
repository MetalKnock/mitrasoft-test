import { PostsActionTypes } from 'src/constants/store';

import { PostsAction, PostsState } from 'src/types/storePosts.types';

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const posts = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.SET_POSTS:
      return { ...state, posts: action.payload };
    case PostsActionTypes.SET_LOADING_POSTS:
      return { ...state, loading: action.payload };
    case PostsActionTypes.SET_ERROR_POSTS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { posts };
