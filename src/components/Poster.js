import React, { Component } from 'react';
import "../App.css";

export default class Poster extends Component {
  constructor() {
    super();
    this.state = {
      movies:null
    }
  }

  render() {

    this.setState({
      movies:this.props.poster
    })

    
    return (
      <div>
        {
          this.state.movies == null ?
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> :
            <div className="card banner-card" >

              <img src={`https://image.tmdb.org/t/p/original${this.state.movies.backdrop_path}`} className="card-img-top banner-img" alt="..." />

              <h2 className="card-title banner-title">{this.state.movies.title}</h2>
              <p className="card-text banner-text">{this.state.movies.overview}</p>
            </div>


        }
      </div>
    )
  }
}
