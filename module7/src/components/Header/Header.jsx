import "./Header.css";

import {useNavigate} from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
      <nav>
        <button onClick={() => navigate("/")}>Home page</button>
        <button onClick={() => navigate("cinema")}>cinema</button>
        <button onClick={() => navigate("/movies")}> films</button>
        <button onClick={() => navigate("/movies/add")}> ajouter un film</button>
      </nav>
  );
};

const Header = ({urlLogo, children}) => {
  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
      <NavBar />
    </header>
  );
};

export default Header;
