import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Menus } from "../../templates";
import "./product.css";
import { connect } from "react-redux";
import { getDataProductList } from "../../action/getApiProduct";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getDataProductList());
  }

  render() {
    const { getProductListResult } = this.props;
    if (!getProductListResult) return <h5 className="loading">LOADING....</h5>;
    console.log("APAKAH MASUK?", this.props.getProductListResult.shoes);
    return (
      <div className="productLayer">
        <div className="mt-2">
          <Container>
            <Row>
              <h2 className="new">New Releases</h2>
              <Col>
                <Row className="card-product-list">
                  {getProductListResult.shoes.map((product) => (
                    <Menus key={product.index} menu={product} />
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

//DATA DARI REDUCER
const mapStatetoProps = (state) => ({
  getProductListResult: state.ReducerProductAPI.getProductListResult,
  getProductListLoading: state.ReducerProductAPI.getProductListResult,
  getProductListError: state.ReducerProductAPI.getProductListError,
});

export default connect(mapStatetoProps, null)(ProductPage);
