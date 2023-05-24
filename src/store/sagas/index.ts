import { spawn } from 'redux-saga/effects';
import { postsSaga } from './postsSaga';
import { userSaga } from './usersSaga';
import { commentsSaga } from './commentsSaga';

function* rootSaga() {
  yield spawn(commentsSaga);
  yield spawn(postsSaga);
  yield spawn(userSaga);
}

export { rootSaga };
