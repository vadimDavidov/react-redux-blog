import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/useDataContext';

function Nav() {
  const { search, setSearch } = useContext(DataContext);

  return (
    <article className="Nav">
      <label htmlFor="searchpost">Search Post</label>
      <input
        id="searchpost"
        type="text"
        placeholder="Search Post"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'post'}>Post</Link>
        </li>
        <li>
          <Link to={'about'}>About</Link>
        </li>
      </ul>
    </article>
  );
}

export default Nav;
