import ErrorPage from "./ErrorPage";
import Main from "./Maincomponent";
import Home from "./Homepage";
import Shop from "./Shoppage";
import Cart from "./Cartpage";
import Mainpage from "./Mainpage";


const routes =[{
    path:"/",
    element:<Main/>,
    errorElement:<ErrorPage/>,
        children:[
        {path:"/",
        element:<Home/>,
        },
        {path:"/shop",            
        element:<Shop/>
        },
        {path:"/cart",
            element:<Cart/>

        }]
},
];

export default routes;