import React from 'react'
import Card from '../Card/Card';
import './List.scss'

export const List = () => {
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
          title: "Dress",
          isNew: false,
          oldPrice: 19,
          price: 10,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Hat",
          isNew: false,
          oldPrice: 19,
          price: 10,
        },
      ];
  return (
    <div className='list'>
        {data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}
