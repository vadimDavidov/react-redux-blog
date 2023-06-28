import { useState, useEffect, createContext } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';
import api from '../api/posts';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const { data } = useAxiosFetch();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResult = posts.filter(
      post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResult.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        navigate,
        datetime,
        api,
        posts,
        setPosts,
        search,
        setSearch,
        searchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
