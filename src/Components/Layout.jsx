// components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <>
      <Navigation />
      <main style={{ padding: '20px' }}>
        <Outlet /> {/* Dynamic content goes here */}
      </main>
      <footer style={{ backgroundColor: '#f4f4f4', padding: '1rem', textAlign: 'center' }}>
        <p>© 2025 InstaBoard. All rights reserved.</p>
      </footer>
    </>
  );
}
