import { Link, NavLink } from "react-router"

function Navbar() {
  const user = null;
  return (
    <header>
      <nav className="shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-5">
          <Link to="/">
            realestate
          </Link>
          <ul className="flex justify-between gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/properties">Properties</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            {
              user && (
                <>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-properties">My Properties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/add-properties">Add properties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar