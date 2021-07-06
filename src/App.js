import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodDetails from "./components/FoodDetails";
import SingleFood from "./components/SingleFood";


function App() {
  return (
    <div className="App">
      <Router>
        <h1>Food Blog</h1>
        <Switch>
          <Route path="/" exact component={FoodDetails} />
          <Route path="/food/:foodId" exact component={SingleFood} />
          <Route>404 page not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
