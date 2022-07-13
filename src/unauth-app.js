import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import NotFound from "./pages/not-found/not-found";

const UnauthApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default UnauthApp;