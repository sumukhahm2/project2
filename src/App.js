import React,{Fragment,useState,useContext} from 'react'
import './App.css';
import ProductEntryForm from './Component/ProductEntryForm';
import Navigation from './Component/Navigattion';
import Display from './Component/Display';
import Context from './Component/Context';
const App=()=> {

  return (
     <Fragment>
      <header>
      <Navigation/>
      <ProductEntryForm />
      </header>
      <main>
        <Display />
      </main>
     </Fragment>
  );
}

export default App;
