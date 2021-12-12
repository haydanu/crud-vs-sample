import {
  ADD_NEW_POST,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAIL,
  GET_POST_DETAILS,
  GET_POST_DETAILS_SUCCESS,
  GET_POST_DETAILS_FAIL,
  DELETE_POST_BY_ID,
  DELETE_POST_BY_ID_SUCCESS,
  DELETE_POST_BY_ID_FAIL,
  UPDATE_POST_BY_ID,
  UPDATE_POST_BY_ID_SUCCESS,
  UPDATE_POST_BY_ID_FAIL
} from '../../actyionTypes'

export const addNewPost = (requestBody) => {
  return {
    type: ADD_NEW_POST,
    payload: requestBody
  };
};

export const addNewPostSuccess = (payload) => {
  return {
    type: ADD_NEW_POST_SUCCESS,
    payload: payload,
  };
};

export const addNewPostFail = (error) => {
  return {
    type: ADD_NEW_POST_FAIL,
    payload: error,
  };
};

export const getPostDetails = (postIdList) => {
  return {
    type: GET_POST_DETAILS,
    payload: postIdList,
  };
};

export const getPostDetailsSuccess = (post) => {
  return {
    type: GET_POST_DETAILS_SUCCESS,
    payload: post,
  };
};

export const getPostDetailsFail = (error) => {
  return {
    type: GET_POST_DETAILS_FAIL,
    payload: error,
  };
};

export const deletePostById = (id) => {
  return {
    type: DELETE_POST_BY_ID,
    payload: id,
  };
};

export const deletePostByIdSuccess = (post) => {
  return {
    type: DELETE_POST_BY_ID_SUCCESS,
    payload: post,
  };
};

export const deletePostByIdFail = (error) => {
  return {
    type: DELETE_POST_BY_ID_FAIL,
    payload: error,
  };
};

export const updatePostById = (postId, requestBody) => {
  return {
    type: UPDATE_POST_BY_ID,
    payload: {
      id: postId,
      requestBody
    },
  };
};

export const updatePostByIdSuccess = (post) => {
  return {
    type: UPDATE_POST_BY_ID_SUCCESS,
    payload: post,
  };
};

export const updatePostByIdFail = (error) => {
  return {
    type: UPDATE_POST_BY_ID_FAIL,
    payload: error,
  };
};
