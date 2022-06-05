import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from'./components/header';
import Home from "./components/home";
import Tools from "./components/tools";
import Choices from "./components/choices";
import Websites from "./components/websites";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <Switch>  
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/tools' >
                <Tools />
              </Route>
              <Route path='/choices'>
                <Choices />
              </Route>
              <Route path='/websites'>
                <Websites />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
