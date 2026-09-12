import ErrorPage from '../ErrorPage';
import Main from '../Maincomponent';
import Home from './Homepage';
import Shop from './Shoppage';
import Cart from './Cartpage';
import Single from './Single';
import StructureDeck from './Strukturedeck';
import SealedProduct from './SealedProduck';
import Accessories from './Accessories';


const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop/> ,
        children:[
         { path:'/shop', element:<Single/>},
        { path:'/shop/struckture', element:<StructureDeck/>},
        {path:'/shop/sealed', element:<SealedProduct/>},
        {path:'/shop/accessories', element:<Accessories/>},],
       },
      { path: '/cart', element: <Cart /> },
    ],
  },

];

export default routes;
