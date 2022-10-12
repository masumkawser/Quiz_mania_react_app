
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
         element:<Home></Home>
        },
        {
          path:'/statistic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
         element:<Statistic></Statistic>
        },
        {
          path:'/blog',
         element:<Blog></Blog> },
         {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
            element: <QuizDetails></QuizDetails>
        }
      ]
    },
    {
      path: '*',
      element: <div>This path not found! please browse other pages....</div>
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
