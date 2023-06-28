import { format } from 'date-fns';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

function EditPost() {
  const navigate = useNavigate();
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const { id } = useParams();

  const editPost = useStoreActions(actions => actions.editPost);
  const editTitle = useStoreState(state => state.editTitle);
  const editBody = useStoreState(state => state.editBody);

  const setEditTitle = useStoreActions(actions => actions.setEditTitle);
  const setEditBody = useStoreActions(actions => actions.setEditBody);

  const getPostById = useStoreState(state => state.getPostById);
  const post = getPostById(id);

  useEffect(() => {
    setEditTitle(post.title);
    setEditBody(post.body);
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = id => {
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    editPost(updatedPost);
    navigate(`/post/${id}`);
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
        <button type="button" onClick={() => handleEdit(post.id)}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default EditPost;
