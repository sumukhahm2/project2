import React,{Fragment} from 'react'
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom'
const BackDrop=(props)=>{
    return(
        <div className='backdrop' onClick={props.onConfirm}>
    
        </div>
       ); 
}
const OverLay=(props)=>{
  return(
    <Container>
        
    </Container>
  );
}
const Cart=(props)=>{
    <Fragment>
         {ReactDOM.createPortal(<BackDrop/>,document.getElementById('backdrop'))}
         {ReactDOM.createPortal(<OverLay/>,document.getElementById('overlay'))}
    </Fragment>
}

export default Cart