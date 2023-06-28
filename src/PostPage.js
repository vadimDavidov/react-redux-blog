import { useContext } from 'react';
import DataContext from './context/useDataContext';
import { useParams, Link } from 'react-router-dom';

function PostPage() {
  const { posts, setPosts, api, navigate } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.length && posts.find(post => post.id.toString() === id);

  const handleDelete = async id => {
    const postsList = posts.filter(post => post.id !== id);
    try {
      await api.delete(`posts/${id}`);
      setPosts(postsList);
      navigate('/');
    } catch (error) {
      console.log(`Error DELETE: ${error.message}`);
    }
  };

  return (
    <main className="PostPage">
      <form onSubmit={e => e.preventDefault()}>
        <h2 className="postTitle">{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
        <p className="postBody">{post.body}</p>
        <div className="buttonsGroup">
          <Link to={`/edit/${id}`}>
            <button type="button" className="editButton">
              Edit Post
            </button>
          </Link>
          <button
            type="submit"
            className="deleteButton"
            onClick={() => handleDelete(post.id)}
          >
            Delete Post
          </button>
        </div>
      </form>
    </main>
  );
}

export default PostPage;
