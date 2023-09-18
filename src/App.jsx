import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Routes>
                {/* <Route exact path="/">
                    {user ? <Home /> : <Register />}
                </Route>
                <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
                <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
                <Route path="/profile/:username">
                    <Profile />
                </Route> */}
                <Route exact path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
