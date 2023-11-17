import React, { Component } from 'react'
import { movies } from './Moviedata';
import MovieCard from './MovieCard';

export default class Movies extends Component {
  render() {
    let movie=movies.results;
    return (
        <div className='movie-box'>

      <div  >
        {
            movies==null?
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>:
            <div>
            <div>
            </div>
            <h1>Trending</h1>
            <div className="Movie-card-container">
            {
               
                movie.map((item)=>{
                    return <MovieCard id={item.id} movie={item} />
                })
            }
            </div>
           
            
            

            </div>
            
        }
      </div>
      </div>
    )
  }
}
