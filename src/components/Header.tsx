import React from 'react'

function Header() {
  return (
    <header className='header'>
      <a href="/" className="header-brand">
        JavaCoffee
      </a>
      <nav className="header-navbar">
        <ul>
          <li><a className='active' href="/">Home</a></li>
          <li><a href="/menu">Nosso menu</a></li>
          <li><a href="/sobre">Sobre nós</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header