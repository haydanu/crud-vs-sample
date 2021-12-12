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
  UPDATE_POST_BY_ID_FAIL,
} from '../../actyionTypes';

const initialState = {
  posts: [],
  newPost: {},
  loadingAddNewPost: false,
  loadingRetrievePost: false,
  loadingDeletePost: false,
  loadingUpdatePost: false,
  error: {
    message: '',
  },
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DETAILS:
      state = { ...state, loadingRetrievePost: true };
      break;
    case GET_POST_DETAILS_SUCCESS:
      state = { ...state, posts: action.payload, loadingRetrievePost: false };
      break;
    case GET_POST_DETAILS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error in retrieving data',
        },
        loadingRetrievePost: false,
      };
      break;
    case ADD_NEW_POST:
      state = { ...state, loadingAddNewPost: true };
      break;
    case ADD_NEW_POST_SUCCESS:
      state = { ...state, posts: [action.payload, ...state.posts], loadingAddNewPost: false };
      break;
    case ADD_NEW_POST_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error in adding data',
        },
        loadingAddNewPost: false,
      };
      break;
    case DELETE_POST_BY_ID:
      state = { ...state, loadingDeletePost: true };
      break;
    case DELETE_POST_BY_ID_SUCCESS: {
      const deletedPostIndex = state.posts.findIndex(post => post.id === action.payload);
      let updatedPostList = [...state.posts];
      updatedPostList.splice(deletedPostIndex, 1);

      state = { ...state, posts: updatedPostList, loadingDeletePost: false };
      break;
    }
    case DELETE_POST_BY_ID_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error in deleting data',
        },
        loadingDeletePost: false,
      };
      break;
    case UPDATE_POST_BY_ID:
      state = { ...state, loadingUpdatePost: true };
      break;
    case UPDATE_POST_BY_ID_SUCCESS: {
      const updatedPostIndex = state.posts.findIndex(post => post.id === action.payload.id);
      let updatedPostList = [...state.posts];
      updatedPostList.splice(updatedPostIndex, 1, action.payload);

      state = { ...state, posts: updatedPostList, loadingUpdatePost: false };
      break;
    }
    case UPDATE_POST_BY_ID_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error in updating data',
        },
        loadingUpdatePost: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
