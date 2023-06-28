import { Link } from 'react-router-dom';

function Missing() {
  return (
    <main>
      <h2 className="postTitle">Not Found any page by this address.</h2>
      <p className="postBody">Well, that's disappointing.</p>
      <p className="postBody">
        <Link to="/">
          <span>⬅️ </span> Visit Our Homepage
        </Link>
      </p>
    </main>
  );
}

export default Missing;
