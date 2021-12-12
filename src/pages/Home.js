import PostNavbar from 'components/Navbar';
import FormAddPost from 'components/FormAddPost';
import Posts from 'components/Posts';

export default function Home() {
  return (
    <>
      <PostNavbar />
      <FormAddPost />
      <Posts />
    </>
  );
}
