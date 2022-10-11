import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/quiz', element: <Quiz></Quiz> },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/about', element: <About></About> }
      ]
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
