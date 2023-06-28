import { useEffect, useState } from 'react';
import { useContext } from 'react';
import DataContext from './context/useDataContext';
import { useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const { datetime, api, navigate, posts, setPosts } = useContext(DataContext);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const post = posts.find(post => post.id.toString() === id);

  console.log(post.id);

  useEffect(() => {
    setEditTitle(post.title);
    setEditBody(post.body);
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async id => {
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`posts/${id}`, updatedPost);
      setPosts(
        posts.map(post => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (error) {
      console.log(`Error PUT: ${error.message}`);
    }
  };

  return (
    <main className="NewPost">
      <h2 className="postTitle">Edit Post</h2>
      <form onSubmit={e => e.preventDefault()}>
        <label className="postTitle" htmlFor="newposttitle">
          Title:
        </label>
        <input
          type="text"
          id="newposttitle"
          value={editTitle}
          onChange={e => setEditTitle(e.target.value)}
        />
        <label htmlFor="newpostbody">Post:</label>
        <textarea
          id="newpostbody"
          cols="30"
          rows="10"
          value={editBody}
          onChange={e => setEditBody(e.target.value)}
        />
        <button type="submit" onClick={() => handleEdit(post.id)}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default EditPost;
