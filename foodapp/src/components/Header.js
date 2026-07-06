const Header = () => {
  return (
    <div className="header-app">
      <div className="logo-container">
        <img className="logo" src="./food_logo.png" alt="Food Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;