import { Toast } from 'react-bootstrap';

export default function ErrorToast({ show, errorMessage, onClose }) {
  return (
    <Toast show={show} onClose={onClose}>
      <Toast.Header>
        <strong className='me-auto'>{errorMessage}</strong>
      </Toast.Header>
    </Toast>
  )
}