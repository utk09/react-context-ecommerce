import React, { Component } from "react";
import { ProductConsumer } from "../contextAPI";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, img, price, inCart } = value.detailProduct;
          return (
            <>
              <div className="container">
                <div className="col-10 mx-auto text-center">
                  <h1>Product Details here</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-4 mx-auto col-md-4">
                  <img src={img} alt={title} className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-4 mx-auto col-md-4">
                  <h4>Title: {title}</h4>
                  <h5>
                    <strong>
                      Price: <span>INR</span>
                      {price}
                    </strong>
                  </h5>
                  <div>
                    <Link to="/">Back to Product Page</Link>
                    <Button
                      size="sm"
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                      variant="secondary"
                    >
                      {inCart === true ? (
                        <span>In Cart</span>
                      ) : (
                        <span>Add to Cart</span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}
