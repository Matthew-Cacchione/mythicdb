import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Affixes from "../pages/Affixes";
import Character from "../pages/Character";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./Header";
import Home from "../pages/Home";
import Introduction from "../pages/Introduction";

import { CharacterProvider } from "../context/CharacterContext";
import { PATHS } from "../constants";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={PATHS.affixes} element={<Affixes />} />
        <Route
          exact
          path={PATHS.character}
          element={
            <CharacterProvider>
              <Character />
            </CharacterProvider>
          }
        />

        <Route exact path={PATHS.newPlayer} element={<Introduction />} />
        {/* TODO: Implement leaderboard page. */}
        <Route path="" element={<>No path found.</>} />
      </Routes>
    </Router>
  );
};

export default App;
