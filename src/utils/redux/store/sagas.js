import { all, fork } from 'redux-saga/effects';

import PostSaga from '../saga/posts';

export default function* rootSaga() {
  yield all([fork(PostSaga)]);
}
