
import { List,ListItem } from './MoviesList.styled';
import { Link,useLocation } from "react-router-dom";


export const Movieslist = ({ films }) => {
const location = useLocation()

  return (
    <List>


      {films.map(film => (
     
 
    <ListItem key = {film.id}>
   <Link to={`/movies/${film.id}`} state ={{from:location}}>
  <h2>{film.original_title}</h2>
  
</Link>
   </ListItem>

      ))}
    </List>
  );
};