import { get, post, del, patch } from '../../services/api';

const POST_ENDPOINT = '/posts';

export const getPostDetails = (id) =>
  get(POST_ENDPOINT, {
    params: {
      id: id,
    },
  });

export const addNewPost = (requestBody) => post(POST_ENDPOINT, requestBody);

export const deletePost = (id) => del(`${POST_ENDPOINT}/${id}`);

export const updatePost = (id, requestBody) => patch(`${POST_ENDPOINT}/${id}`, requestBody);
