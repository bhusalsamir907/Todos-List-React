import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos}  from './MyComponents/Todos';
import {Todo}  from './MyComponents/Todo';

function App() {
 
  return (
     <> 
   <Header title="MyTodos-List"/>
   <Todos/>
   <Footer/>
   <Todo/>
   </>
  );
}

export default App;
