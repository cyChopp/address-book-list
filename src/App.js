import { Route, Switch } from "react-router";
import "./App.scss";
import SearchContainer from "./searchContainer/SearchContainer";
import Settings from "./settings/Settings";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <SearchContainer />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </>
  );
}

export default App;
