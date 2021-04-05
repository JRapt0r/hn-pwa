// Components
import { Navbar, NavItem } from "./Navbar";
import {
  Route,
  Switch,
  NavLink
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Thread from "./Pages/Thread";
import User from "./Pages/User";
import ErrorHandler from "./Pages/ErrorHandler";

function App() {
  return (
    <div className="break-words dark:text-white">
      <Navbar>
        <NavLink activeClassName="bg-opacity-10 bg-black rounded-md dark:text-orange" to="/news"><NavItem>Top</NavItem></NavLink>
        <NavLink activeClassName="bg-opacity-10 bg-black rounded-md dark:text-orange" to="/newest"><NavItem>New</NavItem></NavLink>
        <NavLink activeClassName="bg-opacity-10 bg-black rounded-md dark:text-orange" to="/ask"><NavItem>Ask</NavItem></NavLink>
        <NavLink activeClassName="bg-opacity-10 bg-black rounded-md dark:text-orange" to="/show"><NavItem>Show</NavItem></NavLink>
        <NavLink activeClassName="bg-opacity-10 bg-black rounded-md dark:text-orange" to="/jobs"><NavItem>Jobs</NavItem></NavLink>
      </Navbar>

      <main className="sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <Switch>
          <Route path="/" exact>
            <Home sort="news" />
          </Route>

          {/* Handle category links */}
          <Route path="/news/:pageNum?">
            <Home sort="news" />
          </Route>
          <Route path="/newest/:pageNum?">
            <Home sort="newest" />
          </Route>
          <Route path="/ask/:pageNum?">
            <Home sort="ask" />
          </Route>
          <Route path="/show/:pageNum?">
            <Home sort="show" />
          </Route>
          <Route path="/jobs/:pageNum?">
            <Home sort="jobs" />
          </Route>

          {/* Handle discussion threads */}
          <Route path="/item/:itemId">
            <Thread />
          </Route>

          {/* Handle user profiles */}
          <Route path="/user/:username">
            <User />
          </Route>

          {/* Handle all other routes */}
          <Route path="*">
            <ErrorHandler error="404 error">
              Page not found
            </ErrorHandler>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
