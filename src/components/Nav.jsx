import Logo from "../assets/airbnb/airbnb-logo.png"

function Nav() {
  return (
    <nav className="nav">
      <img
        src={Logo}
        alt="Logo"
        className="logo"
      />
    </nav>
  )
}

export default Nav
