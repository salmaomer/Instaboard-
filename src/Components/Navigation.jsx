// components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'underline',
  };

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Home
      </NavLink>{" | "}
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About
      </NavLink>{" | "}
      <NavLink to="/team" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Team
      </NavLink>{" | "}
      <NavLink to="/liked-users" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Liked Users
      </NavLink>
    </nav>
  );
}
