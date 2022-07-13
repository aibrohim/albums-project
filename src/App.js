import { Route, Routes } from "react-router-dom";
import AlbumsProvider from "./contexts/albums";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import SingleAlbum from "./pages/single-album/single-album";

function App() {
  return (
    <AlbumsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:albumId" element={<SingleAlbum />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AlbumsProvider>
  );
}

export default App;
