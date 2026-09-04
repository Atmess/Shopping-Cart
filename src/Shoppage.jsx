import { useOutletContext } from 'react-router-dom';
import useLoadcard from './Loadcard';
import { useState } from 'react';

export default function Shop() {
  const { card, mockcard, error, loading } = useLoadcard();
  const {cart , setcart} = useOutletContext();

  const handleprice = cart.reduce((total,item)=>{return total+Number(item.price)},0)

  const handlecart = (item)=>{
    setcart([...cart , item]);
    alert(`${item.name}`);
  }
  if (loading) return <p>loading</p>;
  if (error) return <p>error to load the page</p>;
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4">
      {card.map((item) => {
        return (
          <div onClick={()=>{
            handlecart(item);
            console.log(cart)
          }} key={item.id}>
            <h3 className="line-clamp-2 text-sm md:text-base font-semibold min-h-[2.5rem]">{item.name}</h3>
            <img src={item.img} alt={item.name} />
            <div>
              <p>{item.type}</p>
              <p>{item.price}$</p>{' '}
            </div>
          </div>
        );
      })}

      <button
        onClick={() => {
          console.log(mockcard);
        }}
      >
        card
      </button>

    </div>
  );
}
