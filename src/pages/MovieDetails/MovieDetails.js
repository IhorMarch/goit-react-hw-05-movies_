import { fetchMoreDetails } from '../../components/API';
import { Loader } from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams,Link,Outlet,useLocation} from 'react-router-dom';
import { Button,Wrapper,Title,ItemImg,ListItem,ListInfo,StyledLink,List } from './MovieDetails.styled';

export default function MovieDetails() {
  const {movieId} = useParams();
const location =useLocation()
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  
  useEffect(() => {

const fetchFilm=()=> {
     try {
        setLoading(true);
       fetchMoreDetails(movieId).then(detailMovie => {
    
       setMovie(detailMovie);
         setLoading(false);
        })
      } catch (error) {
        console.log(error);
      } 
   
    }
    
    fetchFilm();

  }, [movieId]);

   if (!movie) {
    return;
  }

  const genreArr = movie.genres


const genre = genreArr?.map(genre=>
  genre.name).join(' ')
  

  return (
    <>
      
      {loading && <Loader />} 

      
      <Link to={location.state?.from??'/'}><Button type ="button">Go back</Button></Link>

      <Wrapper>
        <div>
        <ItemImg  src={
        movie.poster_path ?
          `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : defaultImg
}
          
alt="poster"
          /></div>
        
        
        <div>
          <Title>{movie.original_title}</Title>
          <ul>
            <ListItem>
              User score <ListInfo>{Math.ceil(movie.vote_average * 10)}%</ListInfo></ListItem>
            <ListItem>
              Overviev <ListInfo>{movie.overview}</ListInfo></ListItem>
            <ListItem>
               Genres <ListInfo> {genre}</ListInfo>
            </ListItem>
           
          </ul>
        </div>
</Wrapper>


    

  <div>
<Title> Additional information </Title>

      <List>
        <ListItem>
           <StyledLink to="cast">Cast</StyledLink> 
        </ListItem>
        <ListItem>
          <StyledLink to="reviews">Reviews</StyledLink>
        </ListItem>

      </List>
       <Outlet />
      


    </div>
  
  </>);
}