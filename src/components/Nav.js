import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

function Nav() {
  const posts = useStoreState(state => state.posts);
  const search = useStoreState(state => state.search);
  const setSearch = useStoreActions(actions => actions.setSearch);
  const setSearchResults = useStoreActions(actions => actions.setSearchResults);

  useEffect(() => {
    const filteredResult = posts.filter(
      post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResult.reverse());
  }, [posts, search, setSearchResults]);

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
