import logo from './logo.svg';
import './App.css';
// import UserCard from './Components/UserCard/UserCard';
// import UserList from './Components/UserList/UserList';
// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Team from './Components/Team/Team.jsx';
import TeamDetail from './Components/TeamDetails/TeamDetails.jsx';
import LikedUsers from './Components/Pages/LikedUsers';
import NotFound from './Components/Pages/NotFound';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:id" element={<TeamDetail />} />
          <Route path="liked-users" element={<LikedUsers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
