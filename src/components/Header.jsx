import { NavLink,BrowserRouter } from "react-router-dom";
import Container from "../components/Container";
function Header() {
  return (
    <header className="bg-gray-100">
        <Container>
            <ul className="flex justify-center gap-4 py-4">
              <li><NavLink to="/" >Home</NavLink></li>
              <li><NavLink to="/profile" >Profile</NavLink></li>
            </ul>
        </Container>
    </header>

  )
}

export default Header
