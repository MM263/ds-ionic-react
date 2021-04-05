import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

export const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/list">
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/list" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
);
