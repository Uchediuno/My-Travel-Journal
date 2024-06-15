import React from "react";
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data"



function App() {

  const journal = data.map(item => {
    return (
             <Main 
              key= {item.id}
              item = {item}
             />
              
    )
  })
  return (
    <div>
      <Header />
      {journal}
    </div>
  );
}

export default App;
