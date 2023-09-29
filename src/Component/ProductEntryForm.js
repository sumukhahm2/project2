import React,{Fragment,useRef,useState} from 'react'
import {Button,Form,Container,Row,Col} from 'react-bootstrap'
const ProductEntryForm=(props)=>{
   
    const shoeRef=useRef()
    const descriptionRef=useRef()
    const priceRef=useRef()
    const lQuantityRef=useRef()
    const mQuantityRef=useRef()
    const sQuantityRef=useRef()

    const formSubmitHandler=async(event)=>{
     event.preventDefault()
   props.postData({
        name:shoeRef.current.value,
        description:descriptionRef.current.value,
        price:priceRef.current.value,
        lQuantity:lQuantityRef.current.value,
        mQuantity:mQuantityRef.current.value,
        sQuantity:sQuantityRef.current.value
     })
    /* const response= await fetch('https://crudcrud.com/api/3543e10628654d15b0f7e55d07af3d04/product',{
        method:'POST',
        body:JSON.stringify({
            id:Math.random().toString(),
            name:shoeRef.current.value,
        description:descriptionRef.current.value,
        price:priceRef.current.value,
        lQuantity:lQuantityRef.current.value,
        mQuantity:mQuantityRef.current.value,
        sQuantity:sQuantityRef.current.value
        }),
        headers:{
            'Content-Type':'application/json'
        }

     })*/

    }
    return(
       <Fragment>
          <Container className=' d-flex'>
    <Form onSubmit={formSubmitHandler}>
        <Row>
            <Col className='col-3'>
            <Form.Group className="mb-3" >
        <Form.Label>Shoe Name</Form.Label>
        <Form.Control type="text" ref={shoeRef}/>
      </Form.Group></Col>
     
      <Col className='col-3'>
      <Form.Group className="mb-3" >
        <Form.Label>Discription</Form.Label>
        <Form.Control type="text" ref={descriptionRef} />
      </Form.Group></Col>
      
      <Col className='col-3'>
      <Form.Group className="mb-3" >
      <Form.Label>Price</Form.Label>
        <Form.Control type="text" ref={priceRef} />
      </Form.Group></Col>
     
      <Col className='col-3 d-flex'>
      <Form.Group className="mb-3" >
      <Form.Label>Quantity Available</Form.Label>
      <Form.Label>L</Form.Label>
        <Form.Control type="text"  className='w-25' ref={lQuantityRef}/>
        <Form.Label>M</Form.Label>
        <Form.Control type="text" className='w-25 ' ref={mQuantityRef}/>
        <Form.Label>S</Form.Label>
        <Form.Control type="text" className='w-25 ' ref={sQuantityRef}/>
      </Form.Group></Col>
      
      <Col>
      <Button variant="primary" type="submit">
        Add Product
      </Button></Col>
      
      </Row>
    </Form>
          </Container>
       </Fragment>
    );
}

export default ProductEntryForm