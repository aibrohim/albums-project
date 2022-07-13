import { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import Album from "../../components/album/album"
import { AlbumsContext } from "../../contexts/albums";

const SingleAlbum = () => {
  const { albumId } = useParams();
  const { albums, setAlbums } = useContext(AlbumsContext);

  const currentAlbum = albums?.find(album => album.id === +albumId);

  const titleRef = useRef();

  if (!currentAlbum) {
    return <h1>Hech narsa yo'q</h1>
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const editingItemIndex = albums.findIndex(album => album.id === currentAlbum.id);
    const newAlbums = [
      ...albums.slice(0, editingItemIndex),
      {
        ...currentAlbum,
        title: titleRef.current.value
      },
      ...albums.slice(editingItemIndex + 1)
    ];

    setAlbums(newAlbums);
  }

  return (
    <main>
      <Album album={currentAlbum} />
      <form onSubmit={handleFormSubmit}>
        <input ref={titleRef} defaultValue={currentAlbum.title} type="text" /><button>Submit</button>
      </form>
    </main>
  )
}

export default SingleAlbum;