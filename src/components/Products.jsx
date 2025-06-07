import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Product from "./Product.jsx";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Sulfar Gaming Chair Office Chair, Reclining High Back PU Leather Desk
          Chair with Headrest and Lumbar Support, Adjustable Swivel Video Game
          Chair, Ergonomic Racing Computer Gaming Chair (White Pink)"
          image="https://m.media-amazon.com/images/I/41JgwzOPkZL._SR480,440_.jpg"
          rating={4}
          price={2251.40}
        />
        <Product
          id="2"
          title="Maybelline Fit Me Foundation, Matte & Poreless, Full Coverage Blendable Normal to Oily Skin, 350 Caramel 30ml"
          image="https://m.media-amazon.com/images/I/618m5tIhcKL._AC._SR360,460.jpg"
          rating={4}
          price={133.97}
        />
      </div>
      <div className="products_row">
        <Product
          id="3"
          title="PLAYSTATION 5 SLIM + PS5 MEDIA REMOTE + MARVEL'S SPIDERMAN 2 (PS5) + MORTAL KOMBAT 11 ULTIMATE (PS5) + TEST DRIVE UNLIMITED SOLAR CROWN (PS5)by Sony"
          image="https://m.media-amazon.com/images/I/71FmBlNp0lL._AC_UL320_.jpg"
          rating={5}
          price={15,727}
        />
        <Product
          id="4"
          title="NIVEA Perfect & Radiant LUMINOUS630 Anti Dark Marks, Treatment Serum, 30ml"
          image="https://m.media-amazon.com/images/I/61suK1yjFXL._AC._SR360,460.jpg"
          rating={3}
          price={238.99}
        />
        <Product
          id="5"
          title="medicube Collagen Jelly Cream- Niacinamide & Freeze-Dried Hydrolyzed Collagen - Boosts skin's barrier hydration and gives 24h Glow & Lifted Look - No artificial color, Korean skincare (3.71 fl.oz.)"
          image="https://m.media-amazon.com/images/I/61leLgR06vL._AC._SR360,460.jpg"
          rating={2}
          price={529.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="6"
          title="Reebok RAYG-11022DD Yoga Mat, Desert Dust, 4 mm Size"
          image="https://m.media-amazon.com/images/I/31+rAW1y4QL._SR480,440_.jpg"
          rating={4}
          price={339.79}
        />
        <Product
          id="2"
          title="Zulu Mien - Namsiza Lock Bar Chocker"
          image="https://m.media-amazon.com/images/I/41dHo7AdR2L._SR480,440_.jpg"
          rating={1}
          price={760.00}
        />
      </div>
    </>
  );
};

export default Products;
