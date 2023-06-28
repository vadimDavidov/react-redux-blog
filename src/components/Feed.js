import Post from './Post';

function Feed({ posts }) {
  return (
    <div className="Feed">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
