
import useLoadcard from "./Loadcard";


export default function Shop(){

const {card ,mockcard ,error,loading }=useLoadcard();
if(loading)return <p>loading</p>;
if(error)return<p>error to load the page</p>;
    return(<div className="grid grid-cols-4 grid-rows-4 gap-4">{card.map((item)=>{
        return(<div key={item.id} >
            <img src={item.img} alt={item.name} />
            <div ><h2>{item.name}</h2>
                <p>{item.type}</p>
                <p>{item.price}$</p> </div>
            
        </div>)
    })}
    <button onClick={()=>{console.log(mockcard)}}>card</button>
    </div>)
}
