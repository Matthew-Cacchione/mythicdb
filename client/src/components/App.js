import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./Header";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import { STRINGS } from "../constants";

const App = () => {
  return (
    <Router>
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
        <Route exact path={STRINGS.paths.login} element={<SignIn />} />
        <Route exact path={STRINGS.paths.signUp} element={<SignUp />} />
        <Route path="" element={<>No path found.</>} />
      </Routes>
    </Router>
  );
};

export default App;
