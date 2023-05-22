import { spawn } from 'redux-saga/effects';
import { postsSaga } from './postsSaga';
import { commentsSaga } from './commentsSaga';

function* rootSaga() {
  yield spawn(commentsSaga);
  yield spawn(postsSaga);
}

export { rootSaga };
