
import './App.css';
import Home from'./components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div className="App">
<Router>
<Switch>
        
          <Route path="/">
            <Home />
          </Route>
        </Switch>
</Router>
    </div>
  );
}

export default App;
