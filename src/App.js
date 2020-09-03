import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Form from './componentes/form'

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Form conteudo='Ainda sou um formulário'/>
      <hr/>
      <Footer/>
      
    </div>
  );
}

export default App;
