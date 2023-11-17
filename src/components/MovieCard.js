import React, { Component } from 'react';
import { movies } from './Moviedata';

export default class MovieCard extends Component {
    render() {
        const {backdrop_path,original_title,overview}=this.props.movie
       
        
        return (
            <div>
            {
                this.props==null?
                <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>:

                <div className="card movie-card" style={{height:'40vh',width:'15vw'}} >

                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} style={{height:'40vh',width:'15vw',position:'relative',border:'1 px solid black'}} className="card-img-top banner-img" alt="..." />

                    <h2 className="card-title banner-title" style={{position:'absolute',top:'0.5rem',color:"white",left:'1rem'}}>{original_title}  </h2>
                    <div className="button-wrapper" style={{position:'absolute',top:'15rem',left:'3rem'}}>
                        <a href="#" className="btn btn-primary">Add to Favourite</a>
                    </div>
                </div>
            }
            </div>
        
        )
    }
}
