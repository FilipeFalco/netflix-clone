import React, { useEffect, useState } from 'react'
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow';
import FeatureMovie from '../../components/FeaturedMovie';
import './HomePage.css';

export const HomePage = () => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            // Pegando a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            // Pegando o featured
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeatureData(chosenInfo);
        }

        loadAll();
    }, []);

    return (
        <div className="page">

            {featureData &&
                <FeatureMovie item={featureData} />
            }

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            <footer>
                Feito com <span role="img" aria-label="coração">❤️</span> por Filipe Falco<br />
                Direitos de imagem para Netflix<br />
                Dados fornecidos por themoviedb.org
            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" />
                </div>
            }
        </div>
    );
}
