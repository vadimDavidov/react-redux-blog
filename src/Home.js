import { useContext } from 'react';
import DataContext from './context/useDataContext';
import Feed from './components/Feed';
import useAxiosFetch from './hooks/useAxiosFetch';

function Home() {
  const { searchResults } = useContext(DataContext);
  const { fetchError, isLoading } = useAxiosFetch();

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
