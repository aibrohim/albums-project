import { Link } from "react-router-dom";

const Album = ({ album }) => {
  return (
    <article>
      <h3><Link to={`/album/${album.id}`}>{album.title}</Link></h3>
      <time>{album.date}</time>
      <p>Likes: {album.likes}</p>
    </article>
  );
}

export default Album;