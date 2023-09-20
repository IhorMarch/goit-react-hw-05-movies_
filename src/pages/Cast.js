import { fetchCast } from '../components/API';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

export default function MovieDetails() {
    const { movieId } = useParams();

   
const [loading, setLoading] = useState(false);
 
  const [cast, setCast] = useState({});
 const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  
  useEffect(() => {
   const  fetchCastFilm=()=> {
     try {
            setLoading(true);
       fetchCast(movieId).then(detailCast => {
         setCast(detailCast);
          setLoading(false);
        })
      } catch (error) {
        console.log(error);
      }
    }

    fetchCastFilm();

  }, [movieId]);

    const castArr = cast.cast
    
    return (
      <>
           {loading && <Loader />} 
        <ul>
        
            
{castArr?.map(castItem =>(
        <li >
                 <img src={
castItem.profile_path ?
        `https://image.tmdb.org/t/p/w500/${castItem.profile_path}`
   : defaultImg
}
width={250}
alt="poster"
/>
      <h2> {castItem.original_name}</h2>
                <p>Character: {castItem.character}</p> 
                

            </li>
            ))}
        
        </ul>
      
      </>
      
   );
         
 
 
}