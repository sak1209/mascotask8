import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Your header content */}
      {/* Header Content */}
    </header>
  );
};

export default Header;