
import {Route,Switch} from "react-router-dom";
import FavoritemeetupPage from "./pages/Favoritemeetups";
import AllmeetupPage from "./pages/Allmeetups";
import NewmeetupPage from "./pages/Newmeetups";
import Layout from "./components/layout/Layout";





function App() {
  return (
    <Layout>
      
      <Switch>
      <Route  path="/" exact> <AllmeetupPage /> </Route>
      <Route  path="/new-meetup"> <NewmeetupPage /></Route>
      <Route path="/favorites"> <FavoritemeetupPage /> </Route>
      </Switch>
      
  
    </Layout>
  );
}

export default App;
