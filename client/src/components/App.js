import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth0Provider from "../authentication/auth0-navigate-provider";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";

import { STRINGS } from "../constants";

const App = () => {
  return (
    <Router>
      <Auth0Provider>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path={STRINGS.paths.newPlayer}
            element={<>Introduction</>}
          />
          <Route exact path={STRINGS.paths.affixes} element={<>Affixes</>} />
          <Route
            exact
            path={STRINGS.paths.leaderboard}
            element={<>Leaderboard</>}
          />
          <Route path="" element={<>No path found.</>} />
        </Routes>
      </Auth0Provider>
    </Router>
  );
};

export default App;
