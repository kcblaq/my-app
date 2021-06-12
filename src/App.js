
import {Route,Switch} from "react-router-dom";
import FavoritemeetupPage from "./pages/Favoritemeetups";
import AllmeetupPage from "./pages/Allmeetups";
import NewmeetupPage from "./pages/Newmeetups";
import MainNavigation from "./components/layout/MainNavigation";




function App() {
  return (
    <div>
      <MainNavigation  />
      <Switch>
      <Route  path="/" exact> <AllmeetupPage /> </Route>
      <Route  path="/new-meetup"> <NewmeetupPage /></Route>
      <Route path="/favorites"> <FavoritemeetupPage /> </Route>
      </Switch>
      
  
    </div>
  );
}

export default App;
