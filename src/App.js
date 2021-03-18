import { Route, Switch } from "react-router";
import "./App.scss";
import List from "./list/List";
import Settings from "./list/settings/Settings";

function App() {
  return (
    <>
      <Switch>
        <Route  path="/">
        <List />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </>
  );
}

export default App;
