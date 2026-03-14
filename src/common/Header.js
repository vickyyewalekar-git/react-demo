import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

// Full routes data with page content keywords for content-based search
  const routes = [
    { keywords: ['home'], path: '/home', display: 'Home Page', contentKeywords: ['home'] },
    { keywords: ['profile', 'global', 'csss', 'row', 'bigred'], path: '/profile', display: 'User Profile (CSS demos)', contentKeywords: ['profile', 'global css', 'row', 'lorem'] },
    { keywords: ['setting', 'settings', 'headcolor'], path: '/setting', display: 'Settings (links)', contentKeywords: ['setting', 'headcolor', 'link'] },
    { keywords: ['event', 'events', 'alert', 'button'], path: '/react-events', display: 'React Events (handlers)', contentKeywords: ['event', 'alert', 'button', 'click'] },
    { keywords: ['form', 'input', 'submit', 'change'], path: '/test-form', display: 'Test Form (inputs)', contentKeywords: ['form', 'input', 'submit', 'name', 'message'] },
    { keywords: ['portal'], path: '/test-portal-link', display: 'Portal Test', contentKeywords: ['portal', 'modal'] },
    { keywords: ['suspense'], path: '/test-suspense', display: 'Suspense Test', contentKeywords: ['suspense'] },
    { keywords: ['transition'], path: '/transition', display: 'Transition', contentKeywords: ['transition'] },
    { keywords: ['hook', 'hooks', 'state', 'rules', 'color', 'red', 'blue'], path: '/hooks', display: 'Hooks Overview (useState)', contentKeywords: ['hook', 'state', 'rules', 'color', 'favorite'] },
    { keywords: ['useeffect', 'effect', 'timer', 'count', 'render'], path: '/useeffect-hooks', display: 'useEffect Hook (timer)', contentKeywords: ['useeffect', 'timer', 'count', 'render'] },
    { keywords: ['context', 'usecontext', 'user', 'linus'], path: '/usecontext-hooks', display: 'useContext Hook', contentKeywords: ['context', 'user', 'component'] },
    { keywords: ['testimonial'], path: '/testimonial/1', display: 'Testimonials', contentKeywords: ['testimonial'] }
  ];

  const updateSuggestions = (query) => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const matches = routes
      .map(route => {
        let score = 0;
        const allKeywords = [...route.keywords, ...(route.contentKeywords || [])];
        allKeywords.forEach(keyword => {
          if (lowerQuery.includes(keyword) || keyword.includes(lowerQuery)) {
            score += 1;
          }
        });
        return { ...route, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setSuggestions(matches);
    setShowDropdown(matches.length > 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // If suggestion selected or single match, navigate
      const lowerQuery = searchQuery.toLowerCase().trim();
      const match = routes.find(route => 
        route.keywords.some(keyword => keyword === lowerQuery || lowerQuery === keyword)
      );
      if (match) {
        navigate(match.path);
      } else {
        navigate('/home');
      }
      setSearchQuery('');
      setShowDropdown(false);
    }
  };

  const selectSuggestion = (path, display) => {
    setSearchQuery(display);
    navigate(path);
    setShowDropdown(false);
  };

  return (
    <header style={{ 
      background: 'linear-gradient(135deg, lightblue, skyblue)', 
      padding: '1rem 2rem', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky', 
      top: 0, 
      zIndex: 1000 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '1200px', 
        margin: '0 auto',
        flexWrap: 'wrap' 
      }}>
        {/* Logo/Brand with sample SVG logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="#61DAFB" 
            style={{ filter: 'brightness(0) invert(1)' }}
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
            ReactDemos
          </span>
        </Link>

     

        {/* Global Search Bar with Dropdown */}
        <div style={{ position: 'relative', display: 'flex', flex: 1, maxWidth: '400px', margin: '0 2rem' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                updateSuggestions(e.target.value);
              }}
              placeholder="🔍 Search routes, hooks, tests..."
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                border: 'none',
                borderRadius: '25px 0 0 25px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                border: 'none',
                borderRadius: '0 25px 25px 0',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Search
            </button>
          </form>

          {/* Suggestions Dropdown */}
          {showDropdown && suggestions.length > 0 && (
            <ul style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              margin: '0',
              padding: '0.5rem 0',
              listStyle: 'none',
              zIndex: 1001,
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              {suggestions.map((route, index) => (
                <li key={index}>
                  <button
                    onClick={() => selectSuggestion(route.path, route.display)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      color: '#333',
                      ':hover': { background: '#f0f0f0' }
                    }}
                  >
                    {route.display} {route.score > 1 && `(${route.score} matches)`}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* User Actions */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span style={{ color: 'white' }}>👤 User</span>
        </div>
      </div>

      {/* Mobile responsiveness: Hide nav/search on small screens, add hamburger later */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav { display: none; }
          form { maxWidth: 100%; margin: 0.5rem 0; order: 3; }
        }
      `}</style>
    </header>
  );
};

export default Header;
