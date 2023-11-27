import React, { Component } from 'react';


export default class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            favourites:[]
        }
    }
    handlefavourite=(movie)=>{
        let oldData=JSON.parse(localStorage.getItem("movies-app") || "[]");
        if(this.state.favourites.includes(movie.id)){
            oldData=oldData.filter((item)=>(item.id!=movie.id))
        }else{
            oldData.push(movie)  
        }
        localStorage.setItem("movies-app",JSON.stringify(oldData));
        let temp=oldData.map((m)=>(m.id))
        this.setState({favourites:[...temp]})

        setTimeout(() => {
            console.log(oldData)
            console.log(this.state.favourites)
        }, 0);
        
        

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

                        <div className="card movie-card" onMouseOver={() => { this.setState({ hover: id }) }} onMouseOut={() => { this.setState({ hover: null }) }}>

                            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="moviecard-img" alt="..." />

                            <h2 className="card-title movie-card-title " >{original_title}  </h2>

                            <div className="button-wrapper" onClick={()=>{this.handlefavourite(this.props.movie)}} >
                                {
                                    (this.state.hover === id) && <button className="btn btn-primary movie-card-button" >{this.state.favourites.includes(this.props.movie.id)?"Remove from favourite":"Add to Favourite"}</button> 

                                }
                            </div>

                            

                        </div>
                }
                
            </div>

        )
    }
}
