import './Navbar.css';

function Navbar() {
return ( <nav className="navbar"> <div className="navbar-logo">
Student App </div>

```
  <ul className="navbar-links">
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#students">Students</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

);
}

export default Navbar;
