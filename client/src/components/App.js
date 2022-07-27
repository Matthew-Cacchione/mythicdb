import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/">Home</Route>
        <Route path="">No path found.</Route>
      </Switch>
    </Router>
  );
};

export default App;
