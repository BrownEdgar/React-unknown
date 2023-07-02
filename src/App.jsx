import ToTodos from "./components/todos/ToTodos";
import ToUsers from "./components/users/ToUsers";
import ToPosts from "./components/posts/ToPosts"
import ToComments from "./components/comments/ToComments"
import './App.css'

 export default function App() {

  return (
    <div className="App">
        <ToTodos/>
        <ToUsers/>
        <ToPosts/>
        <ToComments/>
    </div>
  );
};