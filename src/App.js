import React from "react";
import GlobalStyles from "./config/GlobalStyles";
import {Switch,Route} from "react-router-dom";
import Intro from "./Views/Intro";

function App() {
  return (
    <div>

    <GlobalStyles />
      <Switch>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
</div>
  );
}

export default App;
