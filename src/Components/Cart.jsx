import React, { useContext, useState } from "react";
import { Card, CardBody, CardText, Col, Container, Row } from "react-bootstrap";
import { mycontext } from "../App";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const cart = () => {
  const [ 
    items,
    setitems,
    cartcount,
    setCartCount,
    selectedproducts,
    setSelectedProducts,] =
    useContext(mycontext);

  

  const totalPrice = selectedproducts.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = selectedproducts.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  const handleInc = (id, quantity) => {
    setCartCount((cartcount) => cartcount + 1);
    setSelectedProducts((curr) => {
      return curr.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };
  const handleDec = (id, quantity) => {
    setCartCount((cartcount) =>cartcount - 1);
    setSelectedProducts((curr) => {
      return curr.map((element) => {
        if (element.id === id && quantity > 0) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };
  const RemovefromCart = (id, quantity) => {
    if (quantity) setCartCount((cartcount) => cartcount - quantity);
    else setCartCount((cartcount) => cartcount - 1);
    const productafterremoved = selectedproducts.filter(
      (element) => element.id !== parseInt(id)
    );
    setSelectedProducts(productafterremoved);
  };
  return (
    <section>
      <Container className="cart_main_container">
        <Row className="gx-4 gy-2 gx-lg-5">
          {selectedproducts &&
          <Col>
            {selectedproducts.map((element, index) => {
              return (
                <Card key={index}>
                  <CardBody className="cart_container">
                    <div>
                      <img src={element.image} />
                    </div>
                    <div className="px-2 py-4 gap-3">
                      <h1>{element.head}</h1>
                      <CardText>{element.title}</CardText>
                    </div>
                    <div className="quantity_container">
                      <span>
                        {element.quantity > 1 ? (
                          <button
                            onClick={() =>
                              handleDec(element.id, element.quantity || 1)
                            }
                          >
                            -
                          </button>
                        ) : (
                          <button>-</button>
                        )}
                      </span>
                      <span>{element.quantity ? element.quantity : 1}</span>
                      <span>
                        <button
                          onClick={() =>
                            handleInc(element.id, element.quantity || 1)
                          }
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <div className="price_container">
                      <strong>₹{element.price}</strong>
                      <br />
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          RemovefromCart(element.id, element.quantity || 1);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                    
                  </CardBody>
                </Card>
              );
            })}
            <div id="total_main_container">
              <Card>
                <div className="total_container">
                  <div className="left">
                    <strong>TOTAL QUANTITY:</strong>
                  </div>
                  <div>
                    <strong>{totalQuantity}</strong>
                  </div>
                </div>
                <div className="total_container">
                  <div className="left">
                    <strong>SUBTOTAL:</strong>
                  </div>
                  <div>
                    <strong>₹{totalPrice}</strong>
                  </div>
                </div>
                <div className="total_container">
                  <div className="left">
                    <strong>SHIPPING:</strong>
                  </div>
                  <div>
                    <strong>FREE</strong>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="total_container">
                  <div className="left">
                    <strong>TOTAL:</strong>
                  </div>
                  <div>
                    <strong>₹{totalPrice}</strong>
                  </div>
                </div>
              </Card>
              <div className="px-2 py-3 gap-2"> 
                
              <Button>Purchase Item </Button>
        
              </div>
            </div>
          </Col>
}
        </Row>
      </Container>
    </section>
          
  );
};

export default cart;
