import React, { Component } from 'react'
import { movies } from './Moviedata';
import MovieCard from './MovieCard';

export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      pagearray:[1,2,3,4]
    }
  }
  render() {
    let movie=movies.results;
    return (
        <div className='movie-box'>

      <div  >
        {
            movies==null?
            <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>:
            <div>
            <div>
            </div>
            <h1>Trending</h1>
            <div className="Movie-card-container" style={{display:'flex',justifyContent:'center'}}>
            {
               
                movie.map((item)=>{
                    return <MovieCard id={item.id} movie={item} />
                })
            }
            </div>
            <div className="pagination-container">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {
                              this.state.pagearray.map((page)=>(<li class="page-item"><a class="page-link" href="#">{page}</a></li>))
                            }
                            
                            
                            <li class="page-item" ><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        }
      </div>
      </div>
    )
  }
}
