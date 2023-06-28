import Feed from './components/Feed';
import { useStoreState } from 'easy-peasy';

function Home({ fetchError, isLoading }) {
  const searchResults = useStoreState(state => state.searchResults);

  return (
    <main className="Home">
      {isLoading && <h2>Loading Posts ...</h2>}
      {!isLoading && fetchError && <h2>{fetchError}</h2>}
      {!isLoading && !fetchError && searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <h2>No Posts To Display</h2>
      )}
    </main>
  );
}

export default Home;
