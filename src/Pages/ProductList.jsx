import React, { useContext } from 'react';
import { mycontext } from '../App';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';



const ProductList = () => {
    const[
        items,
        setitems,
        cartcount,
        setCartCount,
        selectedproducts,
        setSelectedProducts,
    ]=useContext(mycontext);
    
    return (
      
        <section>
           <Sidebar />
            <Container>
                <Row className='gx-4 gy-2 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {items?.map((element,index)=>{ 
                    return(
                        <Col key={index} >
                            <CardGroup>
                                <Card> 
                            <Card.Img 
                            variant="top" 
                            src={element.image}
                            className="list_image"
                            /> 
                       
                        <Card.Body>
                        <Card.Title>{element.head}</Card.Title>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>{element.description}</Card.Text>
                        <Card.Text>{element.collection}</Card.Text>
                        <Card.Text>{element.gender}</Card.Text>
                        <Card.Text>{element.occasion}</Card.Text>
                        <Card.Text>{element.karatage}</Card.Text>
                        <Card.Text> ₹{element.price}</Card.Text>
                        <div className='px-2 py-4'>
                        <Link to={`/productsdetail/${element.id}`}>
                        <Button >Buy Now</Button>
                        </Link>
                        </div>
                        </Card.Body>
                        </Card>
                        </CardGroup>

                        </Col> 
                    )
                })}
                </Row>
            </Container>
        </section>
    );
};

export default ProductList;