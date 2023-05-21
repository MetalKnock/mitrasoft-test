import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { getAllPosts } from 'src/api/postsApi';
import { Posts } from 'src/types/common.types';
import { PostsActionTypes } from 'src/constants/store';
import { fetchPostsSuccess, fetchPostsRejected } from '../actions/postsActions';

function* handlePosts() {
  try {
    const data: Posts = yield call(getAllPosts);
    yield delay(500);
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(fetchPostsRejected(message));
    }
  }
}

function* watchPostsSaga() {
  yield call(handlePosts);
}

function* postsSaga() {
  yield takeEvery(PostsActionTypes.FETCH_POSTS_REQUEST, watchPostsSaga);
}

export { postsSaga };
