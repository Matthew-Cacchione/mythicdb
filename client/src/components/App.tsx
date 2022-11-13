// Required libraries.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Required types and interfaces.
import { FC } from "react";

// Required pages.
import AddCharacter from "../pages/AddCharacter";
import Affixes from "../pages/Affixes";
import Character from "../pages/Character";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./Header";
import Home from "../pages/Home";
import Introduction from "../pages/Introduction";
import SearchResults from "../pages/SearchResults";

// Required context and constants.
import { CharacterProvider } from "../context/CharacterContext";
import { PATHS } from "../constants";

const App: FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATHS.affixes} element={<Affixes />} />
        <Route
          path={PATHS.character}
          element={
            <CharacterProvider>
              <Character />
            </CharacterProvider>
          }
        />
        <Route path={PATHS.newPlayer} element={<Introduction />} />
        <Route path={PATHS.searchResults} element={<SearchResults />} />
        <Route path={PATHS.addCharacter} element={<AddCharacter />} />
        <Route path="" element={<>No path found.</>} />
      </Routes>
    </Router>
  );
};

export default App;
