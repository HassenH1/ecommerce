import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return <h1>{hello.title}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
