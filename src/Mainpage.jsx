import { Outlet } from "react-router-dom";

export default function Mainpage(){

    return(<main className="flex justify-center">
        <Outlet/>
    </main>)
}