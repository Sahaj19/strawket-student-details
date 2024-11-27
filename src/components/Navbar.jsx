function Navbar() {
  return <nav>
  <div className="leftLogoDiv"><figure><img src="https://strawket.com/Logo_Strawket-01.jpg" alt="strawket logo" title="Strawket Logo"/></figure></div>
  <div className="rightNavigationDiv">
    <span title="notifications"><i className="bi bi-bell-fill"></i></span>
    <figure><img title="user avatar" src="https://robohash.org/eumquaecum.png?size=250x250&set=set1" alt="avtar"/></figure>
  </div>
</nav>
}

export default Navbar;