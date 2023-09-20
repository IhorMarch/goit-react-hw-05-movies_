import { fetchReviews } from '../components/API';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

export default function MovieDetails() {
    const { movieId } = useParams();
 const [loading, setLoading] = useState(false);
   
    
 
  const [reviwes, setReviwes] = useState([]);
 
  
  useEffect(() => {
   const  fetchReviewFilm=()=> {
      try {
         setLoading(true);
       fetchReviews(movieId).then(detailReview => {
         setReviwes(detailReview.results);
         setLoading(false);
        })
      } catch (error) {
        console.log(error);
      }
    }
    
      fetchReviewFilm();
      
  }, [movieId]);

    

  

    return (
        <>
            {loading && <Loader />}

            {reviwes.length !== 0 && (
                <ul>
        
           
                    {reviwes?.map(reviwe => (
                        <li key={reviwe.id}>
                 
                            <h2>Author: {reviwe.author}</h2>
                            <p>{reviwe.content}</p>
                

                        </li>
    
                    ))}
        
                </ul>)}
            
            {reviwes.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
      </>
   );
         
 
 
}