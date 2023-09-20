import { Route, Routes, } from 'react-router-dom';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));


export const App = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
               <Route path="cast" element={<Cast />} />
               <Route path="reviews" element={<Reviews />} />
          </Route>
       
        

       <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    <GlobalStyle />
    </>
    
 
  );
}