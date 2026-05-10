import React from "react";
import './index.css';

// emulate data from server
const productData = [
  {
    name: "Laptop Pro",
    description: "High-perfomance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerfull gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header/>
      <Catalog/>
      <Footer/>
    </>
  )
};

function Header(){

  const hours = new Date().getHours();

  return (
    <header className="header">
      <h1>Electronic store</h1>
      <nav className="nav">
        <ul>
          <li>
            Home
            <a href="#home"></a>
          </li>
          <li>
            Catalog
            <a href="#catalog"></a>
          </li>
          <li>
            About Us
            <a href="#aboutUs"></a>
          </li>
          <li>
            Contacts
            <a href="Contacts"></a>
          </li>
        </ul>
      </nav>
      <div className="working-hours">
        <p>{hours >= 9 && hours <= 20 ? `We are currently open from ${hours}:00 till 20:00` 
          : `We are currently close, now there are ${hours}:00. We will work from 9:00 till 20:00`}</p>
      </div>
    </header>
  );
};

function Catalog(){
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((product,index) => <Product productProps={product} key={product.name}/>)}
      </ul>
    </main>
  );
};

function Product({productProps}){

  const products = {...productData};

  // if(productProps.soldOut) {return null};

  return (
    // !productProps.soldOut && (
    //   <li className="product">
    //     <img src={productProps.photoName} alt={productProps.name}></img>
    //     <div>
    //       <h1>{productProps.name}</h1>
    //       <p>{productProps.description}</p>
    //       <span>{productProps.price}</span>
    //     </div>
    //   </li>
    // )

    productProps.soldOut ? (
      <li className="product sold-out">
        <img src={productProps.photoName} alt={productProps.name}></img>
        <div>
          <h1>{productProps.name}</h1>
          <p>{productProps.description}</p>
          <span>SOLD OUT</span>
        </div>
      </li>
    ) : (
      <li className="product">
        <img src={productProps.photoName} alt={productProps.name}></img>
        <div>
          <h1>{productProps.name}</h1>
          <p>{productProps.description}</p>
          <span>{productProps.price}</span>
        </div>
      </li>
    )
  );
};

function Footer(){
  return (
    <footer className="footer">
      <h2>Footer</h2>
    </footer>
  );
};

export default App;

