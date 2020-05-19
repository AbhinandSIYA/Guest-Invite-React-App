import React from 'react'

 const Navbar = () => {
    return (
        <div className="navbar">
        <div className="logo">
          <h1><i className='fas fa-glass-cheers' />
            Guest Info
          </h1>
          <p>Rock The Party!</p>
        </div>
        <ul>
          <li>Hello, user</li>
          <span className="sm-hide">|</span>
          <li>
            <a href="#!">
              <span className="sm-hide">LogOut</span>
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    )
}
 export default Navbar