import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MoviesDetailPage from '../MoviesDetailPage/MoviesDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from '../../data';

function App() {
  const [user, setUser] = useState(null);

  function login(user) {
    setUser(user);
  }

 return (
   <main>
       { user ?
          <>
            <NavBar user={user}/>
            <Routes>
              <Route path="/movies" element={<MoviesListPage movies={movies} />} />
              <Route path="/movies/:title" element={<MoviesDetailPage movies={movies} />} />
              <Route path="/actors" element={<ActorListPage movies={movies} />} />
            </Routes>
          </>
          :
          <LoginPage setUser={setUser} />
       }
   </main>
 );
};
export default App;