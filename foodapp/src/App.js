import logo from './logo.svg';
import './App.css';

const Header=()=>{
  return(
    <div className='header-app'>
      <div className="logo-container">
       <img className="logo-container" src="./food_logo.png" alt="food-logo"/>
       </div>
       <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
       </div>
    </div>
  )
}
const App=()=> {
  return (
    <div className="header">
         <Header/>
    </div>
  );
}

export default App;
