import { PostsActionTypes } from 'src/constants/store';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { getAllPosts } from 'src/api/postsApi';
import { Posts } from 'src/types/common.types';

import { setErrorPosts, setLoadingPosts, setPosts } from '../actions/postsActions';

function* handlePosts() {
  try {
    const data: Posts = yield call(getAllPosts);
    yield put(setPosts(data));
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(setErrorPosts(message));
    }
  }
}

function* watchPostsSaga() {
  yield put(setLoadingPosts(true));
  yield call(handlePosts);
  yield delay(500);
  yield put(setLoadingPosts(false));
}

function* rootSaga() {
  yield takeLatest(PostsActionTypes.GET_POSTS, watchPostsSaga);
}

export { handlePosts, watchPostsSaga, rootSaga };
