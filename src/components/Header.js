export default function Header() {
  
  const logo = "<brunostar/>";
  
    const toggleNavbar = () => {
        document.body.classList.toggle('nav-open');
    }
    
    const removeNavbar =  () => {
            document.body.classList.remove('nav-open');
        
    }
    
  return (
    <header>
      <div class="logo">{logo}</div>
      <button class="nav-toggle" 
      aria-label="toggle navigation" 
      onClick={toggleNavbar}>
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item" onClick={removeNavbar}>
            <a href="index.html" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item" onClick={removeNavbar}>
            <a href="index.html#services" class="nav__link">
              My Services
            </a>
          </li>
          <li class="nav__item" onClick={removeNavbar}>
            <a href="index.html#about" class="nav__link">
              About me
            </a>
          </li>
          <li class="nav__item" onClick={removeNavbar}>
            <a href="index.html#work" class="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
