
import './App.css';
import Home from'./components/Home';
import Location from'./components/Location'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Company from './components/Company'
import Webdesign from './components/Webdesign'
import Graphicdesign from './components/Graphicdesign'
import Appdesign from './components/Appdesign'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div className="App">

<Router>
<div className="container">
<Navbar />
</div>
<Switch>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Location" >
            <Location />
             </Route>
             <Route path="/Company" >
            <Company />
             </Route>
             <Route path="/Contact" >
            <Contact />
             </Route>
             <Route path="/Webdesign" >
            <Webdesign />
             </Route>
             <Route path="/Appdesign" >
            <Appdesign />
             </Route>
             <Route path="/Graphicdesign" >
            <Graphicdesign />
             </Route>
           
        </Switch>
        <Footer/>
</Router>




    </div>
  );
}

export default App;
