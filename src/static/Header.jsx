
import profileImage from '../assets/mypicture.jpeg';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-shell">
        <a className="brand-mark" href="#home" aria-label="Odah Victory home">
          <img src={profileImage} alt="ODAH VICTORY" className="brand-avatar" />
          <span className="brand-name">ODAH VICTORY</span>
        </a>

        <nav aria-label="Main navigation" className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
