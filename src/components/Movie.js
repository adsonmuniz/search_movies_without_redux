import React from 'react';

const Movie = ({ movie }) => {
    let rating = 0;
    let countRating = 0;
    if (movie.Ratings !== undefined) {
        movie.Ratings.forEach(element => {
            let value = 0;
            if(element.Value.indexOf('/') !== -1) {
                let val = element.Value.split('/');
                value = val[0]/val[1];
            } else if (element.Value.indexOf('%') !== -1) {
                let val = element.Value.replace('%','');
                value = val/100;
            } else {
                value = element.Value;
            }
            rating += value;
            countRating++;
        });
        if (countRating > 0) {
            rating = rating / countRating ;
        }
    }
    return (
        <div className="movie">
            <ul>
                <li><img src={ movie.Poster } alt={ movie.Title } /></li>
                <li><h3>Nome: { movie.Title }</h3></li>
                <li><p>Média de ratings: { (rating * 100).toFixed(2) } %</p></li>
                <li><p>Diretor: {movie.Director}</p></li>
                <li><p>Autor: {movie.Writer}</p></li>
                <li><p>Ano: {movie.Year}</p></li>
                <li><p>Tipo: {movie.Type}</p></li>
                <li><p>Tempo: {movie.Runtime}</p></li>
                <li><p>Genero: {movie.Genre}</p></li>
                <li><p>País: {movie.Country}</p></li>
                <li><p>Produtora: {movie.Production}</p></li>

            </ul>
        </div>
    );
};

export default Movie;