import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const {cart} = useOutletContext();
  const handleprice = cart.reduce((total,item)=>{return total+Number(item.price)},0).toFixed(2)

  return <div>
  <div className="grid grid-cols-4  gap-4 ">
          {cart.map((item ,index)=>{
            return<div className="min-w-0 flex flex-col" key={index}>
              <h3 className="line-clamp-2 text-sm md:text-base font-semibold min-h-[2.5rem]">{item.name}</h3>
              <img src={item.img} alt={item.name} className="w-full aspect-[59/86] object-contain" />
              <p>{item.type}</p>
              <p>{item.price} $</p>              

            </div>
          })}
          </div>
          <h2>total price :{handleprice} $</h2>
    <h2>Cart Page</h2></div>;
}
