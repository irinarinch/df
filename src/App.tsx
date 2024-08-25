// import FavoritesPage from "./pages/FavoritesPage";
// import HomePage from "./pages/HomePage";
// import InfoPage from "./pages/InfoPage";
// import { Routes, Route } from "react-router-dom";
// import { TMovie } from "./components/List";
// import { TState } from "./store/movies/movies.slice";
// import useData from "./hooks/useData";
// import useFavorites from "./hooks/useFavorites";
// import "./App.css";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Details } from "./Details";
import { Link } from "react-router-dom";
import { IHall } from "./types";
import { hallService } from "./services/hall.service";

// export interface IPageProps {
//   data: TState;
// }

// export interface IFavoritesPageProps {
//   data: TMovie[];
// }

function App() {
  //   const data = useData();
  //   const favorites = useFavorites();
  const [title, setTitle] = useState("Click button");
  const [halls, setHalls] = useState<IHall[]>([]);

  useEffect(() => {
    const fecthData = async () => {
      const data = await hallService.getHalls();
      setHalls(data);
    };
    fecthData();
  }, []);

  async function create() {
    await hallService.createHall({"row": 20});
  }

  async function update() {
    await hallService.updateHall({"checked": false}, 9);
  }

  return (
    <>
      <div className={styles.title}>
        <Details title={title} setTitle={setTitle} />
        <Link to="/admin">Go to admin page</Link>
        <ul>
          {halls.map((hall) => (
            <li key={hall.created_at}>{hall.id} {hall.checked}</li>
          ))}
        </ul>
        <button onClick={create}>create hall</button>
        <button onClick={update}>update hall</button>
      </div>
      

      {/* <Routes>
            <Route path="/admin" element={<HomePage data={data} />} />
        </Routes> */}
    </>
  );
}

export default App;
