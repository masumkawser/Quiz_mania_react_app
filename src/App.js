
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Main from './layout/Main';

function App() {
  const router=createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
         element:<Home></Home>
        },
        {
          path:'/statistic',
         element:<Statistic></Statistic>
        },
        {
          path:'/blog',
         element:<Blog></Blog> },
      ]
    },
    {
      path: '*',
      element: <div>This path not found!</div>
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
