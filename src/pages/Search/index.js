import React, { useState } from 'react'
import './Search.css';
import Tmdb from '../../Tmdb';
import { ResultCard } from '../../components/ResultCard'

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // Ao trocar o que esta sendo digitado, atualiza os resultados
    const onChange = async e => {
        e.preventDefault();

        setQuery(e.target.value);
        // let list = await Tmdb.searchFilm(query);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1&include_adult=false&query=${e.target.value}`).then(res => res.json())
        .then(data => {
            if(!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        })
        
        // if(!list.errors) {
        //    setResults(list)
        // } else {
        //     setResults([]);
        // }
    }

    return (
        <div className="search">
            <div className="search--container">
                <div className="search--content">
                    <div className="search--input">
                        <input type="text" 
                            placeholder="Procurar..."
                            value={query}
                            onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="search--results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
