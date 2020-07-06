import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();
//Provider

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct,
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("Hello from add to cart");
  };

  tester = () => {
    console.log("state products: ", this.state.products[0].inCart);
    console.log("data products: ", storeProducts[0].inCart);

    const tempProducts = [...this.state.products];
    tempProducts[0].inCart = true;
    this.setState(
      () => {
        return { products: tempProducts };
      },
      () => {
        console.log("state products: ", this.state.products[0].inCart);
        console.log("data products: ", storeProducts[0].inCart);
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        <button onClick={this.tester}>test me</button>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
