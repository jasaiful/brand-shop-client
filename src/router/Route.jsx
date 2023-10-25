import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AddCar from '../pages/AddCar/AddCar';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import BrandPage from '../pages/BrandList/BrandPage';
import UpdateProduct from '../pages/UpdateProduct/UpdateProduct';
import ViewDetailsPage from '../pages/ViewDetails/ViewDetailsPage';
import PrivateRoute from './PrivateRoute';


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
        path: "/addProduct",
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
        path: "/brands/:brandName",
        element: <BrandPage></BrandPage>,
        children: [
          {
            path: "update-product",
            element: <PrivateRoute> <UpdateProduct /> </PrivateRoute>
          },
          {
            path: "view-details",
            element: <PrivateRoute> <ViewDetailsPage /> </PrivateRoute>
          }
        ]
      }
    ]
  },
]);

export default myCreatedRoute;