enum PostsActionTypes {
  FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_REJECTED = 'FETCH_POSTS_REJECTED',
}

enum UserActionTypes {
  FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_REJECTED = 'FETCH_USER_REJECTED',
}

export { PostsActionTypes, UserActionTypes };
