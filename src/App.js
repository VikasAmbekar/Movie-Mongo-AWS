import "./App.css";
import AllMovies from "./Pages/AllMovies";
import NewMovies from "./Pages/NewMovies";
import Favourite from "./Pages/Favourite";
import { Route, Routes } from "react-router-dom";
import WebsiteNavigation from "./components/layout/WebsiteNavigation";

function App() {
  return (
    <div className="App">
      <WebsiteNavigation />
      <Routes>
        <Route path="/" element={<AllMovies />}></Route>
        <Route path="/newmovie" element={<NewMovies />}></Route>
        <Route path="/fav" element={<Favourite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
