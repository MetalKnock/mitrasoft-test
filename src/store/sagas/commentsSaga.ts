import { call, delay, put, take } from 'redux-saga/effects';
import { getCommentsForPost } from 'src/api/commentsApi';
import { CommentsActionTypes } from 'src/constants/store';
import { FetchCommentsRequestAction } from 'src/types/storeComments.types';
import { Comments } from 'src/types/common.types';
import { fetchCommentsRejected, fetchCommentsSuccess } from '../actions/commentsActions';

function* handleComments(postId: number) {
  try {
    const data: Comments = yield call(getCommentsForPost, [`postId=${postId}`]);
    yield delay(500);
    yield put(fetchCommentsSuccess(postId, data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(fetchCommentsRejected(postId, message));
    }
  }
}

function* watchComments() {
  while (true) {
    const { postId }: FetchCommentsRequestAction = yield take(
      CommentsActionTypes.FETCH_COMMENTS_REQUEST
    );
    yield call(handleComments, postId);
  }
}

function* commentsSaga() {
  yield watchComments();
}

export { commentsSaga };
