import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

export const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/15666873/pexels-photo-15666873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/15666876/pexels-photo-15666876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Coat",
      isNew: true,
      oldPrice: 19,
      price: 10,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/15672223/pexels-photo-15672223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/15665817/pexels-photo-15665817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/15665815/pexels-photo-15665815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "dress",
      isNew: false,
      oldPrice: 19,
      price: 10,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      isNew: false,
      oldPrice: 19,
      price: 10,
    },
  ];
  return <div className="featuredProducts">
    <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>;
};
