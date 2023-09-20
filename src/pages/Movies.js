import { SearchBar } from '../components/SearchBar/Searchbar'
import { Movieslist } from '../components/MoviesList/MoviesList';
import { Loader } from '../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { fetchSearchMovies } from '../components/API';

export default function Movies() { 

  const [films, SetImages] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  



   const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };


  useEffect(() => {
      if (!searchParams) {
      return;
    }

    async function searchFilm() {
      try {

        SetLoading(true);
   
        const data = await fetchSearchMovies(movieName)

        const filmsArr = data.results;
    
      
        SetImages(filmsArr);

  
      } catch (error) {
       
        return Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        
      } finally {
        SetLoading(false);
      }
    }
     
    searchFilm();
  }, [movieName,searchParams]);


  return (
    
    <div>
     <div>
        <SearchBar onChange={updateQueryString} />
        
        {loading? ( <Loader />):films.length === 0 && movieName?(<h2> Sorry, there are no films matching your search query. Please try again!</h2>):<Movieslist films={films} /> } 
        
  
       
         
        </div>

      
      
</div>


  );








}