import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { connect } from "react-redux";
import { getDataProductList } from "../../action/getApiProduct";
import "./bag.css";

class BagPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    this.props.dispatch(getDataProductList());
  }

  dataBag = () => {
    const { quantity } = this.state;
    const { DataFromDetailPage } = this.props;
    if (!this.props.DataFromDetailPage) return <p>Loading...</p>;

    console.log("CEK ", this.props.DataFromDetailPage);

    return (
      <div className="bag-productList">
        <div className="bag-product">
          <div className="bag-product-check">X</div>
          <div>
            <img
              src={
                require(`../../assets/images/` +
                  `${DataFromDetailPage.name}` +
                  `.png`).default
              }
              width="150px"
              height="150px"
            />
          </div>
          <div className="product-check">
            <div className="bag-product-name">{DataFromDetailPage.name}</div>
            <div className="bag-product-deskripsi">
              <div className="deskripsi-size">
                size : {DataFromDetailPage.size}
              </div>

              <div className="deskripsi-color">Color :</div>
              <div
                className="color-small-box"
                style={{ backgroundColor: DataFromDetailPage.color }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bag-price">${DataFromDetailPage.price}</div>
        <div className="bag-quantity">
          {/* <input
            className="bag-quantity-input"
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.setValue}
          /> */}
          1
        </div>
        <div className="bag-total">${DataFromDetailPage.price}</div>
      </div>
    );
  };

  render() {
    const { DataFromDetailPage } = this.props;
    return (
      <Container>
        <div className="bag">
          <div className="bag-title">Your Bag</div>
          <div className="icon-bag">
            <div className="bag-badge-notif">l</div>
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
              <div className="total-price-price">
                {" "}
                ${DataFromDetailPage.price}
              </div>
            </div>
          </div>
          <div className="bag-bottom">
            <div className="bag-button">
              <div className="bag-button-pay">Pay Now</div>
              <div className="bag-button-pay2">
                <BsArrowRight size={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="bag-footer"></div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  DataFromDetailPage: state.ProductShoesReducer.listBag[0],
  getProductListResult: state.ReducerProductAPI.getProductListResult,
});

export default connect(mapStateToProps, null)(BagPage);
