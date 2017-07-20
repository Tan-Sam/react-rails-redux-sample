import React, {PropTypes} from 'react';
import Create from './Create';
import GrandTotal from './GrandTotal';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grandTotal: 0,
      products: []
    }
  }


  updateGrandTotal = (subTotal) => {
    const grandTotal = this.state.grandTotal + subTotal;
    this.setState({
      grandTotal: grandTotal
    });
  }

  deleteProduct = (productId) => {
    let productIndexToDelete = -1;
    let products = this.state.products;
    products.forEach((el, ind) => {
      if (el.id === productId) {
        productIndexToDelete = ind;
      }
    });

    if (productIndexToDelete >= 0) {
      products.splice(productIndexToDelete, 1);
    }

    this.setState({
      products: products
    });

  }

  createProduct = (product) => {

    let newProduct = {};
    newProduct.title = product.title;
    newProduct.price = product.price;

    let products = this.state.products;
    products.push(newProduct);

    this.setState({
      products: products
    });

  }

  createProductRows = () => {

    var productRows = [];

    this.state.products.forEach((product, index) => {
      productRows.push(<ProductRow title={product.title}
                                   id={uuid.v4()}
                                   price={product.price}
                                   deleteClicked={this.deleteProduct}
                                   grandtotal={this.updateGrandTotal}/>)
    });

    return productRows;
  }





  render() {
    const rows = this.createProductRows();

    return (

      <div className="row" id="cart">
        <div className="col-md-12 productRows">
          {rows}
        </div>
        <div className="col-md-12">
          <Create createProduct={this.createProduct}/>
        </div>
        <div className="col-md-12">
          <GrandTotal value={this.state.grandTotal}/>
        </div>
      </div>

    );
  }
}

Cart.propTypes = {
};
