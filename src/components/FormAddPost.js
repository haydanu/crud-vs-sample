import React, { useState } from 'react';
import {
  Container,
  Form,
  Button
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { addNewPost } from 'utils/redux/actions/posts';
import ErrorToast from 'components/ErrorToast';

function FormAddPost() {
  const [requestBody, setRequestBody] = useState({
    title: '',
    body: ''
  });
  const [error, setError] = useState(null);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const dispatch = useDispatch();

  const addPost = (event) => {
    event.preventDefault();

    if (!requestBody.title || !requestBody.body) {
      setError('You must fill all the input box');
      setShowErrorToast(true);
      return;
    }

    dispatch(addNewPost({
      ...requestBody,
      userId: 1,
    }));
  }

  const toggleShowErrorToast = () => setShowErrorToast(!showErrorToast);

  const handleChange = (event) => {
    setShowErrorToast(false);

    let value = event.target.value;
    let name = event.target.name;

    setRequestBody((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  return (
    <Container>
      <ErrorToast show={showErrorToast} errorMessage={error} onClose={toggleShowErrorToast} />
      <Form className='mb-3'>
        <Form.Group className='mb-3' controlId='post-title'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='test' placeholder='Title' onChange={handleChange} name='title' value={requestBody.title} />
          <Form.Text className='text-muted'>
            Please add the title to your new post
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='post-body'>
          <Form.Label>Post</Form.Label>
          <Form.Control type='textarea' placeholder='Tell us about your new post' onChange={handleChange} name='body' value={requestBody.body} />
        </Form.Group>

        <Button size='sm' variant='primary' type='submit' onClick={addPost}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default FormAddPost;