import React from 'react'

function Header({title,image,children}) {
  return (
    <header className="header">
        <div className="container header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background"></img>
            </div>
            <div className="header__content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header