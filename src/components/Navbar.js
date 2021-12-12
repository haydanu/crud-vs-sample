import {
  Navbar,
  Container
} from 'react-bootstrap';

export default function PostNavbar() {
  return (
    <>
      <Navbar bg='light' className='mb-3'>
        <Container>
          <Navbar.Brand>CRUD NV</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}