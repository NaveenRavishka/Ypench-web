import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navigation.css";

export default function Adminnav() {
  return (
    <nav className="nav">
    <Link to="/" className="site-title">
      YPench
    </Link>
    <ul>
      <CustomLink to="/HotelButton">Hoteldetails</CustomLink>
      <CustomLink to="/VehicleButton">Vehicledeatils</CustomLink>
      <CustomLink to="/Register">Register</CustomLink>
      <CustomLink to="/">LogOut</CustomLink>
    </ul>
  </nav>
)
}
  
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

 