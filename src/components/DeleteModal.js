import {
  Modal,
  Button,
  ButtonGroup
} from 'react-bootstrap';

export default function DeleteModal({
  handleCloseDeleteModal,
  showModal,
  deletePost,
  idToDelete
}) {
  return (
    <Modal show={showModal} onHide={handleCloseDeleteModal}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure want to delete this post?</p>

          <ButtonGroup sise='sm'>
            <Button
              size='sm'
              variant='danger'
              onClick={handleCloseDeleteModal}
            >Cancel</Button>

            <Button size='sm' variant='primary' onClick={() => deletePost(idToDelete)}>Submit</Button>
          </ButtonGroup>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  )
}