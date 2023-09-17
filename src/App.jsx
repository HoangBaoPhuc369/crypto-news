import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
    return (
        <>
            {/* <Switch>
                <Route exact path="/">
                    {user ? <Home /> : <Register />}
                </Route>
                <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
                <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
                <Route path="/profile/:username">
                    <Profile />
                </Route>
            </Switch> */}
        </>
    );
}

export default App;
