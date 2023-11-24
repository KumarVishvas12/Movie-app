import React, { Component } from 'react'
import MovieCard from './MovieCard';
import axios from 'axios';
import Poster from './Poster';

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies:null,
      pagearray: [1],
      currentpage: 1
    }
  }

async componentDidMount(){
 
  const moviedata=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=865656127183e2d3103c833a9cf08b50&page='+ this.state.currentpage)
   this.setState({
    movies:moviedata.data.results
  }) 
}

changemovie=async ()=>{
  this.setState({movies:null})
  const moviedata=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=865656127183e2d3103c833a9cf08b50&page='+ this.state.currentpage)
  this.setState({
   movies:moviedata.data.results
 }) 
 console.log("change movies called")
}

handlenext = () => {
    if(this.state.pagearray[this.state.pagearray.length -1]=== this.state.currentpage){
      this.setState({
        pagearray: [...this.state.pagearray, this.state.pagearray.length + 1]
      })
    }
    this.setState({
      currentpage: this.state.currentpage + 1
    })
    this.changemovie();
  }

handleprevious = () => {
    if(this.state.currentpage!==1){
    this.setState({
      currentpage: this.state.currentpage - 1
    })
    this.changemovie();
  }
  }

  handleclick=(val)=>{
    console.log("current page is ",val)
    this.setState({
      currentpage:val
    })
    this.changemovie();
    
  }

  render() {
    return (
      <div className='movie-box'>

        <div  >
          {
            this.state.movies == null ?
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> :
              <div>
              <Poster poster={this.state.movies[0]}/>
                <div>
                </div>
                <h1>Trending</h1>
                <div className="Movie-card-container" style={{ display: 'flex', justifyContent: 'center' }}>
                  {

                    this.state.movies.map((item) => {
                      return <MovieCard id={item.id} movie={item} />
                    })
                  }
                </div>
                <div className="pagination-container">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" onClick={this.handleprevious} >Previous</a></li>
                      {
                        this.state.pagearray.map((page) => (<li class="page-item" ><a className="page-link" onClick={()=>{this.handleclick(page)}}>{page}</a></li>))
                      }


                      <li class="page-item" ><a className="page-link" onClick={this.handlenext}>Next</a></li>
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
