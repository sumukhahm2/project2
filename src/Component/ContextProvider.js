import React,{useState} from 'react'
import Context from './Context';

const ContextProvider=(props)=>{
   const [addedItem,setAddItem]=useState([])
    const addItemHandler=(item)=>{
        setAddItem((prev)=>{
         return [item,...prev]
        })
    }
    const context={
        items:addedItem,
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:(id)=>{}
    }
    return(
        <React.Fragment>
           <Context.Provider value={context}>
             {props.children}
           </Context.Provider>
        </React.Fragment>
    );
}

export default ContextProvider