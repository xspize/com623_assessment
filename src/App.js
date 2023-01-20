import React from "react";
import GlobalStyles from "./config/GlobalStyles";
import {Switch,Route} from "react-router-dom";

import Intro from "./Views/Intro";
import Notificationwarning from "./Views/notificationwarning";
import Name from "./Views/name";

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

         <Route path="/Name">
          <Name />
         </Route>        

      </Switch>
</div>
  );
}

export default App;
