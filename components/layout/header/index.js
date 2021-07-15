import { useState, memo } from 'react';

// components
import Brand from './brand';
import Nav from './nav';

const Header = () => {
  const [isResponsiveNav, setIsResponsiveNav] = useState(false);

  return (
    <>
      <div className="super-wrapper">
        <Brand
          setIsResponsiveNav={setIsResponsiveNav}
          isResponsiveNav={isResponsiveNav}
        />
      </div>
      <Nav isResponsiveNav={isResponsiveNav} />
    </>
  );
};

export default memo(Header);
