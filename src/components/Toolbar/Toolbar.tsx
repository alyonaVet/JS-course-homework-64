import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <NavLink to="/" className="navbar-brand fw-semibold">My Blog</NavLink>
        </div>
        <div className="navbar-nav">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link fw-medium">Home</NavLink>
            <NavLink to="/add" className="nav-link fw-medium">Add</NavLink>
            <NavLink to="/about" className="nav-link fw-medium">About</NavLink>
            <NavLink to="/contacts" className="nav-link fw-medium">Contacts</NavLink>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Toolbar;