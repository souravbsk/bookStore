import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Books from './components/Books/Books'
import BookDetails from './components/BookDetails/BookDetails'
import LoadingPage from './components/LoadingPage/LoadingPage'
import Error404 from './components/Error404/Error404'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/books",
        element:<Books></Books>,
        loader:() => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path:"books/:bookId",
        element:<BookDetails></BookDetails>,
        loader:({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path:"/error",
        element:<Error404></Error404>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
