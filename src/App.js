import Layout from './Layout';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Missing from './pages/Missing';

import { Routes, Route } from 'react-router';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions(actions => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <article className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home fetchError={fetchError} isLoading={isLoading} />}
          />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </article>
  );
}

export default App;
