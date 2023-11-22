import React, { Component } from 'react';
import { movies } from './Moviedata';

export default class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            hover: ''
        }
    }
    render() {
        const { backdrop_path, original_title, overview, id } = this.props.movie


        return (
            <div>
                {
                    this.props == null ?
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> :

                        <div className="card movie-card" onMouseEnter={() => { this.setState({ hover: id }) }} onMouseOut={() => { this.setState({ hover: null }) }}>

                            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="moviecard-img" alt="..." />

                            <h2 className="card-title movie-card-title " >{original_title}  </h2>

                            <div className="button-wrapper" >
                                {
                                    (this.state.hover == id) && <a href="#" className="btn btn-primary movie-card-button" style={{ position: 'absolute', bottom: '2rem' }}>Add to Favourite</a>

                                }
                            </div>



                        </div>
                }
                
            </div>

        )
    }
}
