import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodDetails from "./components/FoodDetails";
import SingleFood from "./components/SingleFood";


function App() {
  return (
    <div className="py-5 px-5 md:px-10 lg:px-20 ">
      <Router>
        <h2 className="text-center py-5 uppercase text-2xl font-bold">Food Blog</h2>
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
