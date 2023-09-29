import React,{Fragment,useState} from 'react'
import './App.css';
import ProductEntryForm from './Component/ProductEntryForm';
import Navigation from './Component/Navigattion';
import Display from './Component/Display';
const App=()=> {
 const [submittedData,setSubmittedData]=useState([])
  const dataHandler=(item)=>{
    setSubmittedData((prev)=>{
      return [
        ...prev,
        item
      ]
    })
  }
  console.log(submittedData)
  return (
     <Fragment>
      <header>
      <Navigation/>
      <ProductEntryForm postData={dataHandler}/>
      </header>
      <main>
        <Display data={submittedData}/>
      </main>
     </Fragment>
  );
}

export default App;
