import { call, delay, put, take, takeEvery } from 'redux-saga/effects';
import { getAllPosts, getPostsForUser } from 'src/api/postsApi';
import { Posts } from 'src/types/common.types';
import { PostsActionTypes } from 'src/constants/store';
import { FetchPostsCurrentUserRequestAction } from 'src/types/storePosts.types';
import { toast } from 'react-toastify';
import {
  fetchPostsSuccess,
  fetchPostsRejected,
  fetchPostsCurrentUserSuccess,
  fetchPostsCurrentUserRejected,
} from '../actions/postsActions';

function* handlePosts() {
  try {
    const data: Posts = yield call(getAllPosts);
    yield delay(500);
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(fetchPostsRejected(message));
      toast(message);
    }
  }
}

function* handlePostsCurrentUser(userId: number) {
  try {
    const data: Posts = yield call(getPostsForUser, [`userId=${userId}`]);
    yield delay(500);
    yield put(fetchPostsCurrentUserSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(fetchPostsCurrentUserRejected(message));
      toast(message);
    }
  }
}

function* watchPostsSaga() {
  yield call(handlePosts);
}

function* watchPostsCurrentUserSaga() {
  while (true) {
    const { userId }: FetchPostsCurrentUserRequestAction = yield take(
      PostsActionTypes.FETCH_POSTS_CURRENT_USER_REQUEST
    );
    yield call(handlePostsCurrentUser, userId);
  }
}

function* postsSaga() {
  yield takeEvery(PostsActionTypes.FETCH_POSTS_REQUEST, watchPostsSaga);
  yield takeEvery(PostsActionTypes.FETCH_POSTS_CURRENT_USER_REQUEST, watchPostsCurrentUserSaga);
}

export { postsSaga };
