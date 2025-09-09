import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import '../styles/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState('');

  // Determine active tab based on URL path
  const currentPath = location.pathname.toLowerCase();

  // List of nav links for easier mapping
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'General', path: '/category/general' },
    { label: 'Technology', path: '/category/technology' },
    { label: 'Politics', path: '/category/politics' },
    { label: 'Health', path: '/category/health' },
    { label: 'Art & Culture', path: '/category/art&culture' },
  ];

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/category/${search.trim().toLowerCase()}`);
      setSearch('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <div
        className="navbar__logo"
        onClick={() => navigate('/')}
        tabIndex={0}
        onKeyPress={e => (e.key === 'Enter' ? navigate('/') : null)}
        role="button"
        aria-label="Go to home"
      >
        <h2>News Hub</h2>
      </div>

      <div className="navbar__links">
        {navLinks.map(({ label, path }) => {
          const isActive = currentPath === path || (path !== '/' && currentPath.startsWith(path));
          return (
            <p
              key={label}
              className={isActive ? 'active' : ''}
              onClick={() => navigate(path)}
              tabIndex={0}
              onKeyPress={e => (e.key === 'Enter' ? navigate(path) : null)}
              role="button"
              aria-label={`Go to ${label}`}
            >
              {label}
            </p>
          );
        })}
      </div>

      <div className="navbar__search">
        <input
          className="search-input"
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Search categories"
        />
        <IoSearch className="search-icon" onClick={handleSearch} tabIndex={0} aria-label="Search" />
      </div>
    </nav>
  );
};

export default NavbarComponent;
