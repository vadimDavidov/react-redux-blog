import { format } from 'date-fns';
import { useNavigate } from 'react-router';
import { useStoreState, useStoreActions } from 'easy-peasy';

function NewPost() {
  const navigate = useNavigate();
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const posts = useStoreState(state => state.posts);
  const postTitle = useStoreState(state => state.postTitle);
  const setPostTitle = useStoreActions(actions => actions.setPostTitle);
  const postBody = useStoreState(state => state.postBody);
  const setPostBody = useStoreActions(actions => actions.setPostBody);
  const savePost = useStoreActions(actions => actions.savePost);

  const handleSubmit = e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = { id, title: postTitle, datetime, body: postBody };
    savePost(newPost);
    navigate('/');
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
        <button className="submit">Submit</button>
      </form>
    </main>
  );
}

export default NewPost;
