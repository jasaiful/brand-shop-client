
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BrandList from '../pages/BrandList/BrandList';
import AddCar from '../pages/AddCar/AddCar';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/addCar",
          element: <AddCar></AddCar>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/brand",
          element: <BrandList></BrandList>
        }
      ]
    },
  ]);

export default myCreatedRoute;