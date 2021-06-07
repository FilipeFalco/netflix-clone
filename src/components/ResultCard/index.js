import React from 'react'
import './ResultCard.css'

export const ResultCard = ({movie}) => {
    return (
        <div className="resultCard">
            <div className="resultCard--poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    />    
                ) : (
                    <div className="resultCard--filler-poster">
                        
                    </div>
                )}
            </div>

            <div className="resultCard--info">
                <div className="resultCard--header">
                    <h3 className="resultCard--title">{movie.title}</h3>
                    <h4 className="resultCard--release-date">
                        {movie.release_date ? movie.release_date.substring(0,4) : '-'}
                    </h4>
                </div>

                <div className="resultCard--controls">
                    <button className="resultCard--btn">
                        + Lista para assistir
                    </button>
                </div>
            </div>
        </div>
    )
}