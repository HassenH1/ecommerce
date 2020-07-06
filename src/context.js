import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();
//Provider

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
  };

  componentDidMount() {
    this.setProducts();
  }

  //getting new fresh set of values, instead of copy
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = (id) => {
    console.log(`the id is: ${id}`);
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
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
