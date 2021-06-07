import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeaturedMovie';
import Header from './components/Header'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o featured
      let toprated = list.filter(i => i.slug === 'toprated');
      let randomChosen = Math.floor(Math.random() * (toprated[0].items.results.length - 1));
      let chosen = toprated[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

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