import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { HomePage } from './pages/HomePage';
import { Search } from './pages/Search';
import { User } from './pages/User';

function App() {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
        if (window.scrollY > 10) {
            setBlackHeader(true);
        } else {
            setBlackHeader(false);
        }
    }

    window.addEventListener('scroll', scrollListener);
    return () => { window.removeEventListener('scroll', scrollListener); }
  });

  return (
    <Router>
      <Header black={blackHeader} />

        <Switch>
          <Route exact path="/"> 
            <HomePage />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/user">
            <User />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;