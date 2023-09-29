
import React,{ Fragment } from 'react'
import { Row,Col, Button } from 'react-bootstrap';

const Display=(props)=>{
    console.log(props.data)
    return(
        <Fragment>
             <Row className='m-5'>
               <Col className='Col-2'><b>Name</b></Col>
                <Col className='Col-2'><b>Description</b></Col>
                <Col className='Col-2'><b>Price</b></Col>
                <Col className='Col-4'>
                <b>Quantity Available</b>
                </Col>
                </Row> 
            {props.data.map((item)=><li key={item.id}>
               <Row className='m-5'>
               <Col className='Col-2'>{item.name}</Col>
                <Col className='Col-2'>{item.price}</Col>
                <Col className='Col-2'>{item.description}</Col>
                <Col>
                  <Row className='Col-4'>
                     <Col>{item.lQuantity}</Col>
                     <Col>{item.mQuantity}</Col>
                     <Col>{item.sQuantity}</Col>
                  </Row>
                </Col>
                <Col className='Col-2'>
                <Button className='btn btn danger'>
                    Add To Cart
                </Button>
                </Col>
                </Row> 
               
            </li>)}
        </Fragment>
    );
}

export default Display