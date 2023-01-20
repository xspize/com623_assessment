import React from "react";
import GlobalStyles from "./config/GlobalStyles";
import {Switch,Route} from "react-router-dom";

import Intro from "./Views/Intro";
import Notificationwarning from "./Views/notificationwarning";
import Name from "./Views/name";
import Info from "./Views/info"
import Complete from "./Views/Complete"
import Dashboard from "./Views/dashboard"
import Addtask from "./Views/addtask"

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
         <Route path="/Info">
          <Info />
         </Route> 
         <Route path="/Complete">
          <Complete />
         </Route>   
         <Route path="/Dashboard">
          <Dashboard />
         </Route>   
         <Route path="/Addtask">
          <Addtask />
         </Route>   

      </Switch>
</div>
  );
}

export default App;
