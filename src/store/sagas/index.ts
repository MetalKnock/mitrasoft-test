import { spawn } from 'redux-saga/effects';
import { postsSaga } from './postsSaga';

function* rootSaga() {
  yield spawn(postsSaga);
}

export { rootSaga };
