import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="" element={<>No path found.</>} />
      </Routes>
    </Router>
  );
};

export default App;
