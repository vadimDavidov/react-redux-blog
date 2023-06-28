import { useStoreState, useStoreActions } from 'easy-peasy';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const deletePost = useStoreActions(actions => actions.deletePost);
  const getPostById = useStoreState(state => state.getPostById);
  const post = getPostById(id);

  const handleDelete = id => {
    deletePost(id);
    navigate('/');
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
            type="button"
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
