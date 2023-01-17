import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);

 

  return (
    <header className="header">
      <a href="/" className="header-brand">
        JavaCoffee
      </a>
      <nav className="header-navbar">
        <ul>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/nossomenu">Nosso menu</Link>
          </li>
          <li>
            <Link to="/sobrenos">Sobre nós</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/minhaconta">Minha Conta</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
