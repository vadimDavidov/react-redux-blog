import { useState } from 'react';
import { useContext } from 'react';
import DataContext from './context/useDataContext';

function NewPost() {
  const { navigate, datetime, api, posts, setPosts } = useContext(DataContext);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (error) {
      console.log(`Error POST: ${error.message}`);
    }
  };

  return (
    <main className="NewPost">
      <h2 className="postTitle">New Post</h2>
      <form onSubmit={handleSubmit}>
        <label className="postTitle" htmlFor="newposttitle">
          Title:
        </label>
        <input
          type="text"
          id="newposttitle"
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
        />
        <label htmlFor="newpostbody">Post:</label>
        <textarea
          id="newpostbody"
          cols="30"
          rows="10"
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </main>
  );
}

export default NewPost;
