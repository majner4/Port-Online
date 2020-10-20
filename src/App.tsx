import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from './pages/Game';
import Settings from './pages/Settings';
import About from './pages/About';
import './App.css';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/play",
    sidebar: () => <div>Hrát!</div>,
    main: () => <Game />
  },
  {
    path: "/settings",
    sidebar: () => <div>Nastavení!</div>,
    main: () => <Settings />
  },
  {
    path: "/about",
    sidebar: () => <div>O hře</div>,
    main: () => <About />
  }
];

const App = ():JSX.Element => {
  return (
    <div className="App">
     <Router>
      <div style={{ display: "flex" }}>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list--item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__list--item">
              <Link to="/play">Hrát</Link>
            </li>
            <li className="navigation__list--item">
              <Link to="/settings">Nastavení</Link>
            </li>
            <li className="navigation__list--item">
              <Link to="/about">O hře</Link>
            </li>
          </ul>
        </nav>

        <div style={{ flex: 1, marginTop: "80px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
