import { SearchBar } from '../components/SearchBar/Searchbar'
import { Movieslist } from '../components/MoviesList/MoviesList';
import { Loader } from '../components/Loader/Loader';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { fetchSearchMovies } from '../components/API';

export default function Movies() { 
    
    const [query, SetQuery] = useState('');
    const [films, SetImages] = useState([]);
    const [loading, SetLoading] = useState(false);
   



  
  useEffect(() => {
      if (!query) {
      return;
    }

    async function addImg() {
      try {
        SetLoading(true);
   
        const data = await fetchSearchMovies(query)

        const filmsArr = data.results;
       
        if (filmsArr.length === 0) {
            return Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
          }
        SetImages(filmsArr);
        
    

      } catch (error) {
       
         return Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
      } finally {
        SetLoading(false);
      }
    }
     
    addImg();
  }, [query]);


    const handleSubmit = query => {
      SetQuery (query);
      SetImages([]);
     
      
    };
    






  return (
    <div>
     <div>
          <SearchBar onSubmit={handleSubmit} />
          {films.length > 0 && <Movieslist films={films} />}
          {loading && <Loader />} 
        </div>

      
      
</div>


  );








}