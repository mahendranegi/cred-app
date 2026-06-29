
import { createContext, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { UserContext } from './context/DataContext';
function App() {
  const[bgcolor,setBgcolor]=useState(true);
  const user = 'hello';
  const handleBgm = () =>{
  setBgcolor(prev => !prev);
  if(bgcolor){
    document.querySelector('body').style.background = '#f6f6f6';
    document.querySelector('body').style.color = '#212121';
  }
  else{
    document.querySelector('body').style.background = '#212121';
    document.querySelector('body').style.color = '#fff';
  }
  }
  return (
    <UserContext.Provider value={{user,handleBgm}}>      
    <div className="App">
      <Todo />
    </div>
    </UserContext.Provider>
  );
}

export default App;
