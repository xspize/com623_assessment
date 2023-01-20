import React from "react";
import GlobalStyles from "./config/GlobalStyles";
import {Switch,Route} from "react-router-dom";

import Intro from "./Views/Intro";
import Test from "./Views/test";
import Notificationwarning from "./Views/notificationwarning";

function App() {
  return (
    <div>

    <GlobalStyles />
      <Switch>

        <Route exact path="/">
          <Intro />
        </Route>

        <Route path="/Notification">
          <Notificationwarning />
         </Route>

      </Switch>
</div>
  );
}

export default App;
