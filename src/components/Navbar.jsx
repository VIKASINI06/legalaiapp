import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Legal AI System</h2>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button className="primary">Home</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
