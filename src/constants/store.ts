enum PostsActionTypes {
  GET_POSTS = 'GET_POSTS',
  SET_POSTS = 'SET_POSTS',
  SET_LOADING_POSTS = 'SET_LOADING_POSTS',
  SET_ERROR_POSTS = 'SET_ERROR_POSTS',
}

enum CommentsActionTypes {
  GET_COMMENTS = 'GET_COMMENTS',
  SET_COMMENTS = 'SET_COMMENTS',
  SET_LOADING_COMMENTS = 'SET_LOADING_COMMENTS',
  SET_ERROR_COMMENTS = 'SET_ERROR_COMMENTS',
}

enum UserActionTypes {
  GET_USER = 'GET_USER',
  SET_USER = 'SET_USER',
  SET_LOADING_USER = 'SET_LOADING_USER',
  SET_ERROR_USER = 'SET_ERROR_USER',
}

export { PostsActionTypes, CommentsActionTypes, UserActionTypes };
