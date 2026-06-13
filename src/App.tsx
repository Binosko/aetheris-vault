import { useState, useEffect } from 'react';
import Home from './Home';
import Admin from './Admin';
import NotFound from './NotFound';

const ADMIN_HASH = '#admin_x7K9mP2vL4nQ8wR3tY6hB1jF5cD0zA9sE3gU7iO2pM8kX4qW6yV1eR5nT9';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('hashchange', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
    };
  }, []);

  if (currentPath !== '/' && currentPath !== '/index.html') {
    return <NotFound />;
  }

  if (currentHash === ADMIN_HASH) {
    return <Admin />;
  }

  return <Home />;
}
