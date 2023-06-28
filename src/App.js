import Layout from './Layout';
import Home from './Home';
import PostPage from './PostPage';
import NewPost from './NewPost';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';

import { Routes, Route } from 'react-router';
import { DataProvider } from './context/useDataContext';

function App() {
  return (
    <article className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="edit/:id" element={<EditPost />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </DataProvider>
    </article>
  );
}

export default App;
