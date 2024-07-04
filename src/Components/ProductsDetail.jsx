import React, { useContext, useState } from "react";
import { mycontext } from "../App";
import { useParams } from "react-router-dom";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";

const ProductsDetail = () => {
  const [
    items,
    setitems,
    cartcount,
    setCartCount,
    selectedproducts,
    setSelectedProducts,
  ] = useContext(mycontext);
  let { productid } = useParams();
  const currentitem = items.filter(
    (elements) => elements.id === parseInt(productid)
  );
  const [status, setStatus] = useState(true);
  const AddtoCart = (id, head, title, price, image) => {
    setStatus(false);
    setCartCount((cartcount) => cartcount + 1);
    let addedproducts = {
      id: id,
      head: head,
      title: title,
      price: price,
      image: image,
    };
    setSelectedProducts([...selectedproducts, addedproducts]);
  };
  const Remove = (id) => {
    setStatus(true);
    setCartCount((cartcount) => cartcount - 1);
    const removedproducts = selectedproducts.filter(
      (element) => element.id !== parseInt(id)
    );
    setSelectedProducts(removedproducts);
  };

  return (
    <section>
      <Container>
        <Row className="gx-2 gy-1 gx-lg-2 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {currentitem.map((element, index) => {
            return (
              <div key={index} className="product_detail_container">
              <Card.Img 
                            variant="top" 
                            src={element.image}
                            className="product_detail_image"
                            /> 
                <Col>
                  <Card className="cardbody gap-4">
                    <Card.Body>
                      <Card.Title>{element.head}</Card.Title>
                      <Card.Title>{element.title}</Card.Title>
                      <Card.Text>{element.description}</Card.Text>
                      <Card.Text>₹{element.price}</Card.Text>
                      {status ? (
                        <div  className="px-2 py-7 gap-10"> 
                        <a
                         
                          id={`add${element.id}`}
                          href="#"
                          onClick={() => {
                            AddtoCart(
                              element.id,
                              element.head,
                              element.title,
                              element.price,
                              element.image,
                              element.quantity || 1
                            );
                          }}
                        >
                          <Button>Add To Cart</Button>
                        </a>
                        </div>
                      ) : (
                        <a
                          href="#"
                          onClick={() => {
                            Remove(element.id);
                          }}
                        >
                          <Button>Remove From Cart</Button>
                        </a>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
   
  );
};

export default ProductsDetail;
