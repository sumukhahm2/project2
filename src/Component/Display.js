
import React,{ Fragment,useContext } from 'react'
import { Row,Col, Button } from 'react-bootstrap';
import Context from './Context';

const Display=(props)=>{
    console.log(props.data)
    const ctx=useContext(Context)
    return(
        <Fragment>
             <Row className='m-2'>
               <Col className='Col-2'><b>Name</b></Col>
                <Col className='Col-2'><b>Description</b></Col>
                <Col className='Col-2'><b>Price</b></Col>
                <Col className='Col-4'>
                <b>Quantity Available</b>
                </Col>
                </Row> 
            {ctx.items.map((item)=><li key={item.id}>
               <Row className='m-2'>
               <Col className='Col-2'>{item.name}</Col>
                <Col className='Col-2'>{item.price}</Col>
                <Col className='Col-2'>{item.description}</Col>
                <Col className='Col-4'>
                  <Row >
                     <Col className='Col-4'>{item.lQuantity}</Col>
                     <Col className='Col-4'>{item.mQuantity}</Col>
                     <Col className='Col-4'>{item.sQuantity}</Col>
                  </Row>
                </Col >
                <Col className='Col-2'>
                <Button className='btn  m-1'>
                    Add To Cart
                </Button>
                <Button className='btn btn-danger'>
                    Delete
                </Button>
                </Col>
                </Row> 
               
            </li>)}
        </Fragment>
    );
}

export default Display