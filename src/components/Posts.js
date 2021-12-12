import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getPostDetails, deletePostById } from 'utils/redux/actions/posts';
import DeleteModal from 'components/DeleteModal';
import EditPost from 'components/EditPost';
import ActionInfo from 'components/ActionInfo';

export default function Posts() {
  const LOADING = 'loading...';
  const [showModal, setShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);
  const [editPost, setEditPost] = useState(false);

  const TOTAL_POST = 100;
  const POST_ID_LIST = [];
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchPosts() {
      for (let index = 1; index <= TOTAL_POST; index++) {
        POST_ID_LIST.push(index);
      }
      dispatch(getPostDetails(POST_ID_LIST));
    }

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletePost = id => {
    dispatch(deletePostById(id));
    setShow(false);
  }

  const handleCloseDeleteModal = () => setShow(false);
  const handleShowDeleteModal = (id) => {
    setIdToDelete(id)
    setShow(true)
  };

  const handleCloseEditPost = () => setEditPost(false);
  const handleOpenEditPost = (postId) => {
    setEditPost(true);
    setIdToEdit(postId);
  }

  const {
    posts,
    loadingAddNewPost,
    loadingRetrievePost,
    loadingDeletePost,
    loadingUpdatePost,
    error
  } = useSelector((state) => state.PostReducer);
  return (
    <Container>
      <DeleteModal
        handleCloseDeleteModal={handleCloseDeleteModal}
        showModal={showModal}
        deletePost={deletePost}
        idToDelete={idToDelete}
      />

      {error.message && <ActionInfo detail={error.message} />}

      {
        (loadingAddNewPost || loadingDeletePost || loadingUpdatePost) &&
        <ActionInfo detail={LOADING} />
      }

      {loadingRetrievePost ? (
        LOADING
      ) : (
        posts && posts.map((item) => {
          return (
            <Row className='posts' key={`${item.id}}`}>
              <Col lg={8} md={10} sm={12}>
                <Card className='mb-3'>
                  <Card.Body>
                    {editPost && idToEdit === item.id ? <EditPost title={item.title} body={item.body} handleCloseEditPost={handleCloseEditPost} postIdToEdit={item.id} /> : <>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.body}</Card.Text>
                    </>
                    }

                    {!editPost && <>
                      <ButtonGroup size='sm'>
                        <Button
                          onClick={() => handleShowDeleteModal(item.id)}
                          variant='danger'>
                          Delete
                        </Button>

                        <Button
                          variant='primary'
                          onClick={() => handleOpenEditPost(item.id)}
                        >
                          Edit
                        </Button>
                      </ButtonGroup>
                    </>
                    }

                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
}
