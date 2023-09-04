import { Link, NavLink } from "react-router-dom"
import { getToken } from "../localStorageData/userLocalStorageToken"

const Navbar = () => {
    const token = getToken()
  return (
    <>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container">
                  <Link to={'/'} className="navbar-brand">aamra solution</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <NavLink to={'/'} className="nav-link" aria-current="page">Home</NavLink>
                          </li>
                          
                          
                          {
                            !token ? (
                                <>
                                      <li className="nav-item">
                                          <NavLink to={'/login'} className="nav-link">Login</NavLink>
                                      </li>
                                      <li className="nav-item">
                                          <NavLink to={'/register'} className="nav-link">Register</NavLink>
                                      </li>
                                </>
                            ) :
                            (
                                <>
                                          <li className="nav-item">
                                              <NavLink to={'/user-profile'} className="nav-link">User-profile</NavLink>
                                          </li>
                                </>
                            )
                          }
                      </ul>
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Navbar
