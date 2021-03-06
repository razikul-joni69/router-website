import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import "./App.css";
import FriendDetails from "./components/Friend/FriendDetails/FriendDetails";
import Home from "./components/Friend/Home/Home";
import NoMatch from "./components/Friend/NoMatch/NoMatch";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/friend/:friendId">
                      <FriendDetails/>
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                      <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
