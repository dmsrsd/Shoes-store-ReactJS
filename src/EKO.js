import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { connect } from "react-redux";
import "./bag.css";

class bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  setValue = (e) => this.setState({ [e.target.name]: e.target.value });
  dataBag = () => {
    const { quantity } = this.state;
    return (
      <div className="bag-productList">
        <div className="bag-product">
          <div className="bag-product-check">X</div>
          <div>
            <img
              src={require("../../assets/image/KD13 EP.png").default}
              width="150px"
              height="150px"
            />
          </div>
          <div className="product-check">
            <div className="bag-product-name">KD13 EP</div>
            <div className="bag-product-deskripsi">
              <div className="deskripsi-size">size</div>
              <div className="deskripsi-color">color</div>
            </div>
          </div>
        </div>
        <div className="bag-price">$95.97</div>
        <div className="bag-quantity">
          <input
            className="bag-quantity-input"
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.setValue}
          />
        </div>
        <div className="bag-total">$95.97</div>
      </div>
    );
  };
  render() {
    console.log("cek bag", this.props.bagList);
    return (
      <Container>
        <div className="bag">
          <div className="bag-title">Your Bag</div>
          <div className="icon">
            <div className="bag-badge-notif">1</div>
            <BiShoppingBag size={50} />
          </div>
        </div>
        <div className="bag-konten">
          <div className="bag-konten-header">
            <div className="header-product">Product</div>
            <div className="header-price">Price</div>
            <div className="header-quantity">Quantity</div>
            <div className="header-total">Total</div>
          </div>
          {this.dataBag()}
          <div className="bag-bottom">
            <div className="total-price">
              <div className="total-price-name">Total</div>
              <div className="total-price-price">$95.97</div>
            </div>
          </div>
          <div className="bottom-button">
            <div className="bag-button">
              <div className="bag-button-play">Play Now</div>
              <div className="bag-button-play2">{"—>"}</div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  bagList: state.Product.listBag,
});
export default connect(mapStateToProps)(bag);
