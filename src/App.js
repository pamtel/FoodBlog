import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodDetails from "./components/FoodDetails";

function App() {
  return (
    <div className="py-5">
      <Router>
        <h2 className="text-center pt-5 pb-2 uppercase text-2xl font-bold">Food Blog</h2>
        <div className="flex justify-center items-center pb-5">
          <hr className="line w-20 h-1"/>
        </div>
        <Switch>
          <Route path="/" exact component={FoodDetails} />
          <Route path="*">
            <div className="text-center">404 page not found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
