import { Link } from "react-router"

function Navbar() {
  

  return (
    <>
      <nav className="navbar bg-body-tertiary">
  <form className="container-fluid justify-content-start">
    <Link to='/' className="btn btn-outline-success me-2" type="button">Dashboard</Link>
    <Link to='/add' className="btn btn-sm btn-outline-secondary" type="button">Add</Link>
  </form>
</nav>
    </>
  )
}

export default Navbar
