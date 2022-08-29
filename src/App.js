
import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className='product'>
        <div>
        <Product name="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women(Blue)"
        rate="$11.96"
        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" />  
        </div>
      </div>
    </div>
      
       
  );
}

export default App;
