import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';

function Footer() {
  const today = new Date();
  const postCount = useStoreState(state => state.postCount);
  return (
    <footer className="Footer">
      <p>
        <Link to={'/'}>{postCount} Blog Posts</Link>
      </p>
      <span>
        <Link to={'/post'}>🗒</Link>
      </span>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
