import axios from 'axios';
import ROUTES from './routes/routes';
import { useState, useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage, TodosPage, PostsPage, ErrorPage, LoginPage } from './pages';
import Layouts from './pages/Layouts';
import './App.scss';

export default function App() {
  const [loged, setLoged] = useState(null);
  const [data, setData] = useState({
    posts: [],
    todos: [],
  });

  useEffect(() => {
    axios.all([
			axios('https://jsonplaceholder.typicode.com/posts?_limit=9'),
			axios('https://jsonplaceholder.typicode.com/todos?_limit=15'),
		]).then(([posts, todos]) => {
			setData({
        posts: posts.data,
        todos: todos.data,
      })
		})
  },[]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.TODOS} element={<TodosPage todos={data.todos} />} />
        <Route path={ROUTES.POSTS} element={<PostsPage posts={data.posts} />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  const handleLogin = (loged) => {
    setLoged(loged);
  };

  const handleLogout = () => {
    setLoged(!loged);
  };

  return (
    <div>
      {loged ? (
        <div>
          <button onClick={handleLogout}>Выход</button>
          <RouterProvider router={router} />
        </div>
      ) : (
        <div>
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}
