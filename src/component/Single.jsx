import { useOutletContext } from "react-router-dom";

import Productcard from "./Productcard";
import { useState } from "react";

export default function Single(){

  const {cart,setcart,card, allcard, error, loading} = useOutletContext();
  const [searchhere , setsearch] = useState("");
  const cleantext=(text)=>{
    return text.toLowerCase().replace(/[^a-z0-9]/g, "");
  }
  const displaycard=searchhere===''? card : allcard.filter((item)=>cleantext(item.name).includes(cleantext(searchhere))).slice(0,20);


  const addToCart=(item , newquantity)=>{
  const existcard = cart.find((cartitem)=>cartitem.id===item.id)

  if(existcard){
    const updatecart=cart.map((cartmap)=>{
      if(cartmap.id===item.id){
      return{...cartmap ,quantity:cartmap.quantity+newquantity}
      } 
      return cartmap;
    })
    setcart(updatecart)
  } else {
    setcart([...cart,{...item,quantity:newquantity}]);
    console.log(item)
    console.log(newquantity)
  }
}

  
  if (loading) return <p>loading</p>;
  if (error) return <p>error to load the page</p>;
  
    return (<div>
      <div className="w-full flex justify-center mb-6">
  <input type="text" name="searchhere" value={searchhere} placeholder="Search Here" onChange={(e)=>{setsearch(e.target.value)}} className=" block mx-auto w-full  max-w-md border-2 border-gray-300 focus:border-blue-500 rounded px-4 py-2 outline-none transition" />
      </div>
    <div className="grid  grid-cols-2 md:grid-cols-4 gap-4  ">
      {displaycard.map((item) => {
        return (<Productcard key={item.id} item={item} addToCart={addToCart} />)
        
      })}
</div>
      <button
        onClick={() => {
          console.log(allcard);
        }}
      >
        card
      </button>

    </div>
  );
}