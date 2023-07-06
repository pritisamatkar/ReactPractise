import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body  from './components/Body';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


//lazy loadingor on demand loading grocery component
const Grocery = lazy( () => import("./components/Grocery"));
function AppLayout() {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <AppLayout />,
        children:[
            {
                path:"/",
                element : <Body />
            },
            {
                path:"/home",
                element : <Body />
            },
            {
                path:"/about",
                element : <About />
            },
            {
                path:"/contact",
                element : <Contact />
            },
            {
                path:"/grocery",
                element : <Suspense><Grocery /></Suspense>
            },
            {
                path:"/restaurants/:restId",
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter} />);