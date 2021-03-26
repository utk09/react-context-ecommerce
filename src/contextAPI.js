import React, { Component } from "react";
import { dataProducts, prodInDetails } from "./appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: dataProducts,
    detailProduct: prodInDetails,
    cart: [],
    cartSubtotal: 0,
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.makeTotal();
      }
    );
  };

  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));

    let removedProd = tempProduct[index];

    removedProd.inCart = false;
    removedProd.total = 0;
    removedProd.count = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProduct],
        };
      },
      () => {
        return this.makeTotal();
      }
    );
  };

  makeTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const total = subTotal;
    this.setState(() => {
      return { cartSubtotal: total };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          removeItem: this.removeItem,
          makeTotal: this.makeTotal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
