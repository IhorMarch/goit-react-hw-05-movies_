import React, { useEffect, useState } from 'react';
import { Movieslist } from '../components/MoviesList/MoviesList'
import { fetchTrendingMovies } from '../components/API';



export default function Home() {
    
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {

        const trendingData = async () => {
        
            try {
                const movies = await fetchTrendingMovies();
                
                setTrendingMovies(movies.results);
            } catch (error) {
                console.error(error);
            }
        };

trendingData()        
    }, [])

    return (
        <div>
<h2>Trending today</h2>
            <Movieslist films={trendingMovies} />

        </div>
    )
}


