import React, { Component } from 'react';
import { movies } from './Moviedata';

export default class Favourite extends Component {
    render() {
        const movie = movies.results;
        let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };

        return (
            <div className='fav-container'>
                <div className="row">
                    <div className="col-3 fav-genres">
                        <ul className="list-group">
                            <li className="list-group-item">All Genre</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
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
                                        movie.map((item) => {
                                            return (
                                                <tr>
                                                    <td><img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt={item.title} style={{width:"5rem"}}/></td>
                                                    <td>{item.original_title}</td>
                                                    <td>{[genreids[item.genre_ids[0]],genreids[item.genre_ids[1]]].join(" ")}</td>
                                                    <td>{item.popularity}</td>
                                                    <td>{item.vote_average}</td>
                                                    <td><button type="button" class="btn btn-danger">Delete</button></td>
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
                                <li className="page-item"><a className="page-link" >2</a></li>
                                <li className="page-item"><a className="page-link" >3</a></li>
                                <li className="page-item"><a className="page-link" >Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >


        )
    }
}
