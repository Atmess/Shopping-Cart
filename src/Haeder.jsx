import { Link } from "react-router-dom"

export default function Header({page , setpage}) {
    return (
        <nav className="flex justify-center gap-4 p-4 ">
            <Link to="/">  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Home
            </button></Link>
           <Link to="/shop"> <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Shop
            </button> </Link>
            <Link to="/cart"> <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
                Cart
            </button></Link>
            
        </nav>
    )
}