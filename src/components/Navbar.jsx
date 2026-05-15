import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"
import { baseUrl, logOutUser } from "../services/auth";

function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId, 'userId');

    if (userId) {
      fetch(`${baseUrl}/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
    }
  }, [])

  const handleLogOut = () => {
    logOutUser();
    window.location.href('/');
  }

  return (
    <header>
      <nav className="shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-5">
          <Link to="/" className="text-2xl font-bold">  
            <span className="text-blue-500">Real</span>
            <span className="text-blue-700">Estate</span>
          </Link>
          <ul className="flex justify-between gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/properties">Properties</NavLink>
            </li>
            {
              !user &&
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            }
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
                  <li className="ml-4">
                    Hi {user.fullName} !
                  </li>
                  <li>
                    <NavLink
                      to="/logout"
                      className="bg-red-600 py-2 px-4  text-white rounded-lg"
                      onClick={handleLogOut}
                    >Logout</NavLink>
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