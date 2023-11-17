import React, { Component } from 'react';
import { movies } from './Moviedata';
import "../App.css";

export default class Poster extends Component {
  render() {
    let movie = movies.results;

    
    return (
      <div>
        {
          movies == null ?
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> :
            <div className="card banner-card" >

              <img src={`https://image.tmdb.org/t/p/original${movie[0].backdrop_path}`} className="card-img-top banner-img" alt="..." />

              <h2 className="card-title banner-title">{movie[0].title}</h2>
              <p className="card-text banner-text">{movie[0].overview}</p>
            </div>


        }
      </div>
    )
  }
}
