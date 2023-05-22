import { call, delay, put, take } from 'redux-saga/effects';
import { getUser } from 'src/api/usersApi';
import { User } from 'src/types/common.types';
import { UsersActionTypes } from 'src/constants/store';
import { FetchUsersRequestAction } from 'src/types/storeUsers.types';
import { fetchUsersRejected, fetchUsersSuccess } from '../actions/usersActions';

function* handleUser(id: number) {
  try {
    const data: User = yield call(getUser, id);
    yield delay(500);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(fetchUsersRejected(message));
    }
  }
}

function* watchUserSaga() {
  while (true) {
    const { id }: FetchUsersRequestAction = yield take(UsersActionTypes.FETCH_USERS_REQUEST);
    yield call(handleUser, id);
  }
}

function* userSaga() {
  yield watchUserSaga();
}

export { userSaga };
