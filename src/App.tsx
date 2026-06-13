import { useState, useEffect } from 'react';
import Home from './Home';
import Admin from './Admin';
import NotFound from './NotFound';

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

  if (currentHash === '#admin') {
    return <Admin />;
  }

  return <Home />;
}
