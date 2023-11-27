import React, { Component } from 'react';
import { json } from 'react-router-dom';


export default class Favourite extends Component {
    
    constructor(){
        super();
        this.state={
            genre:'',
           
            currgenre:"All Genre",
            allmovies:''
        }
    }
    deletefavourite=(m)=>{
        let d=JSON.parse(localStorage.getItem("movies-app")).filter((item)=>{
            return item.id!=m.id
        })
        console.log(d)
        localStorage.setItem("movies-app",JSON.stringify(d));

    }
    setallmoviefunc(){
        let  data=JSON.parse(localStorage.getItem("movies-app"))
    localStorage.setItem("movies-app",JSON.stringify(data))
        // this.setState({
        //     allmovies:data
        // })
    }
    
    render() {
        // this.setallmoviefunc()
        
    let  data=JSON.parse(localStorage.getItem("movies-app"))
    localStorage.setItem("movies-app",JSON.stringify(data))
    console.log("Vishvas",data)
    
    // this.setState({
    //     allmovies:data,
   
    // })
    setTimeout(() => {
        console.log("Vishvas",this.state.allmovies) 
    }, 0);

    
   
        // const movie = data
        let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
        let temp=[];
        data.forEach((item)=>{
            if(!temp.includes(genreids[item.genre_ids[0]])){
                temp.push(genreids[item.genre_ids[0]])
            }
        })
        temp.unshift("All Genre");
        
        
        
        
        
        
        return (
            <div className='fav-container'>
                <div className="row">
                    <div className="col-3 fav-genres">
                        <ul className="list-group">
                        {
                            
                            temp.map((item)=>(this.state.currgenre==item?<li className="list-group-item" style={{backgroundColor:'blue',color:'white',fontWeight:'bold'}}>{item}</li>
                            :<li className="list-group-item" onClick={()=>{this.setState({currgenre:item})}} >{item}</li>))
                        }
                            
                            
                        </ul>
                    </div>
                    <div className="col-9 fav-genres">

                        <div className="row">
                            <input type="text" className='input-group-text col' />
                            <input type="number" className='input-group-text col' />
                        </div>
                        <div className="row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Popularity</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item) => {
                                            return (
                                                <tr>
                                                    <td><img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt={item.title} style={{width:"5rem"}}/></td>
                                                    <td>{item.original_title}</td>
                                                    <td>{genreids[item.genre_ids[0]]}</td>
                                                    <td>{item.popularity}</td>
                                                    <td>{item.vote_average}</td>
                                                    <td><button type="button" class="btn btn-danger" onClick={()=>{this.deletefavourite(item)}}>Delete</button></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" >Previous</a></li>
                                <li className="page-item"><a className="page-link" >1</a></li>
                                <li className="page-item"><a className="page-link" >Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >


        )
    }
}
