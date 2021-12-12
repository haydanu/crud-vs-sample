import { takeLatest, takeEvery, put, call, all } from 'redux-saga/effects';

import { ADD_NEW_POST, GET_POST_DETAILS, DELETE_POST_BY_ID, UPDATE_POST_BY_ID } from '../actyionTypes';

import {
  addNewPostSuccess,
  addNewPostFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
  deletePostByIdSuccess,
  deletePostByIdFail,
  updatePostByIdSuccess,
  updatePostByIdFail,
} from '../actions/posts';

import { addNewPost, getPostDetails, deletePost, updatePost } from 'utils/fetch/posts';

function* onAddNewPost({ payload: requestBody }) {
  try {
    const response = yield call(addNewPost, requestBody);
    yield put(addNewPostSuccess(response));
  } catch (error) {
    yield put(addNewPostFail(error.response));
  }
}

function* onGetPostDetails({ payload: postIdList }) {
  try {
    let response = yield all(postIdList.map(id => call(getPostDetails, id)));
    response = [].concat(...response);

    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* onDeletePostById({ payload: id }) {
  try {
    const response = yield call(deletePost, id);
    if (response.status === 200) {
      yield put(deletePostByIdSuccess(id));
    }
  } catch (error) {
    yield put(deletePostByIdFail(error.response));
  }
}

function* onUpdatePostById({ payload: { id, requestBody } }) {
  try {
    const response = yield call(updatePost, id, requestBody);
    yield put(updatePostByIdSuccess(response));
  } catch (error) {
    yield put(updatePostByIdFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(ADD_NEW_POST, onAddNewPost);
  yield takeEvery(GET_POST_DETAILS, onGetPostDetails);
  yield takeEvery(DELETE_POST_BY_ID, onDeletePostById);
  yield takeEvery(UPDATE_POST_BY_ID, onUpdatePostById);
}

export default PostSaga;
