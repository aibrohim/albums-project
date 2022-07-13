import { createContext, useEffect, useState } from "react";
import { types } from "../consts";
import { getRndInteger } from "../utils";

export const AlbumsContext = createContext();

const AlbumsProvider = (props) => {
  const [ albums, setAlbums ] = useState();

  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        setAlbums(data.map(album => {
          return {
            ...album,
            likes: getRndInteger(0, 100),
            date: new Date(`${getRndInteger(2001, 2023)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toString(),
            type: types[getRndInteger(0, 2)]
          }
        }))
      })
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <p>Loading...</p>
  }

  return <AlbumsContext.Provider value={{albums, setAlbums}} {...props}/>
}

export default AlbumsProvider;