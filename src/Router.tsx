import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { List } from "./pages/List";
import { AddExpense } from "./pages/AddExpense";

export const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/list">
        <List />
      </Route>
      <Route exact path="/">
        <Redirect to="/list" />
      </Route>
      <Route exact path="/add" component={AddExpense} />
    </IonRouterOutlet>
  </IonReactRouter>
);
