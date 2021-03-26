import React, { Component } from "react";
import { ProductConsumer } from "../contextAPI";
import { Button, Col, Container, Row } from "react-bootstrap";

export default class Cart extends Component {
  render() {
    return (
      <>
        <section>
          <ProductConsumer>
            {(value) => {
              if (value.cart.length > 0) {
                return (
                  <div>
                    <div>
                      <h1>Your Cart</h1>
                    </div>
                    <div className="container-fluid text-center">
                      <div className="row">
                        <div className="col-10 col-lg-2">
                          <strong>Product</strong>
                        </div>
                        <div className="col-10 col-lg-2">
                          <strong>Name of Product</strong>
                        </div>
                        <div className="col-10 col-lg-2">
                          <strong>Price</strong>
                        </div>
                        <div className="col-10 col-lg-2">
                          <strong>Remove</strong>
                        </div>
                        <div className="col-10 col-lg-2">
                          <strong>Total</strong>
                        </div>
                      </div>
                    </div>
                    {value.cart.map((cartData) => {
                      return (
                        <div className="container-fluid text-center">
                          <div className="row">
                            <div className="col-10 col-lg-2">
                              <img
                                style={{ width: "6rem", height: "4rem" }}
                                src={cartData.img}
                                alt={cartData.title}
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-10 col-lg-2">
                              {cartData.title}
                            </div>
                            <div className="col-10 col-lg-2">
                              {cartData.price}
                            </div>
                            <div className="col-10 col-lg-2">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  value.removeItem(cartData.id);
                                }}
                                size="sm"
                              >
                                Remove
                              </Button>
                            </div>
                            <div className="col-10 col-lg-2">
                              {cartData.total}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <hr />
                    <Container>
                      <Row>
                        <Col>
                          <strong>Total: </strong>
                          {value.cartSubtotal}
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
              } else {
                return (
                  <div>
                    <h3>
                      Currently your cart is{" "}
                      <span style={{ color: "red" }}>Empty</span>
                    </h3>
                  </div>
                );
              }
            }}
          </ProductConsumer>
        </section>
      </>
    );
  }
}
