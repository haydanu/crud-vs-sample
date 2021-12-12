import React, { useState } from 'react';
import {
  Form,
  Button,
  ButtonGroup
} from 'react-bootstrap';

import { updatePostById } from 'utils/redux/actions/posts';
import { useDispatch } from 'react-redux';

export default function EditPost({
  handleCloseEditPost,
  title,
  body,
  postIdToEdit
}) {
  const dispatch = useDispatch();
  const [requestBody, setRequestBody] = useState({
    title,
    body
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setRequestBody((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  const editPost = async () => {
    dispatch(updatePostById(postIdToEdit, requestBody));
    handleCloseEditPost();
  }

  return (
    <Form className='mb-3'>
      <Form.Group className='mb-3' controlId='edit-title'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='test' onChange={handleChange} name='title' value={requestBody.title} />
        {title}
      </Form.Group>

      <Form.Group className='mb-3' controlId='edit-body'>
        <Form.Label>Post</Form.Label>
        <Form.Control type='textarea' onChange={handleChange} name='body' value={requestBody.body} />
      </Form.Group>

      <ButtonGroup size='sm'>
        <Button
          variant='danger'
          onClick={handleCloseEditPost}
          className='mr-3'
        >
          Cancel
        </Button>
        <Button
          variant='primary'
          onClick={editPost}
        >
          Submit
        </Button>
      </ButtonGroup>
    </Form >
  )
}