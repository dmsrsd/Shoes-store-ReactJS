import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./detail.css";

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameShoes: "",
      sizeShoes: "",
      colorShoes: "",
      priceShoes: "",
    };
  }

  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    this.detailData();
    const { name } = this.props.match.params;
    if (!this.props.getProductListResult) return <p>Loading...</p>;
    this.props.getProductListResult.shoes
      .filter((data) => data.name === name)
      .map((filterData) => {
        console.log("filter data", filterData);
        this.setState({
          nameShoes: filterData.name,
          priceShoes: filterData.price,
        });
      });
  }

  gotoBagPage = () => {
    const { nameShoes, priceShoes, sizeShoes, colorShoes } = this.state;
    console.log("Cek Name", nameShoes);
    console.log("Cek Price", priceShoes);
    console.log("Cek Size", sizeShoes);
    console.log("Cek Color", colorShoes);

    const addBag = {
      name: nameShoes,
      price: priceShoes,
      size: sizeShoes,
      color: colorShoes,
    };

    this.props.detailProduct(addBag);
    // alert("add to bag success " + nameShoes + priceShoes + sizeShoes);
  };

  sizeSelected = (value) => {
    this.setState({
      sizeShoes: value,
    });
  };

  colorSelected = (value) => {
    this.setState({
      colorShoes: value,
    });
  };

  detailData = () => {
    const { name } = this.props.match.params;
    const { nameShoes, sizeShoes, colorShoes } = this.state;

    if (!this.props.getProductListResult.shoes)
      return <h5 className="loading">LOADING....</h5>;
    return this.props.getProductListResult.shoes

      .filter((data) => data.name === name)
      .map((filterData) => {
        console.log("FILTER DATA", filterData);
        return (
          <div>
            <div className="detail-wrap"></div>

            <div className="detail-right">
              <div className="detail-image">
                <img
                  src={
                    require(`../../assets/images/` +
                      `${filterData.name}` +
                      `.png`).default
                  }
                  width="515px"
                  height="644px"
                />
              </div>

              <div className="detail-image2">
                <div>
                  <img
                    className="hover-detail-image"
                    src={
                      require(`../../assets/imgDetail/` + `image 1` + `.png`)
                        .default
                    }
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="gap" />

                <div>
                  <img
                    className="hover-detail-image"
                    src={
                      require(`../../assets/imgDetail/` + `image 2` + `.png`)
                        .default
                    }
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="gap" />

                <div>
                  <img
                    className="hover-detail-image"
                    src={
                      require(`../../assets/imgDetail/` + `image 3` + `.png`)
                        .default
                    }
                    width="100px"
                    height="100px"
                  />
                </div>
                <div className="gap" />

                <div>
                  <img
                    className="hover-detail-image"
                    src={
                      require(`../../assets/imgDetail/` + `image 4` + `.png`)
                        .default
                    }
                    width="100px"
                    height="100px"
                  />
                </div>
              </div>
            </div>

            <div className="detail-left">
              <Container>
                <p className="text-category">{filterData.category}</p>
                <h1 className="text-name-shoes">{filterData.name}</h1>
                <h4 className="desc">{filterData.description}</h4>
              </Container>
            </div>

            <div className="detail-video">
              <div className="button-play">
                <img
                  src={
                    require(`../../assets/icons/` + `tombol-play` + `.png`)
                      .default
                  }
                />
              </div>
              <div className="text-play">PLAY VIDEO</div>
            </div>

            <div className="detail-size">
              <div className="detail-size-name">
                <h3 className="text-size">SELECT SIZE (US)</h3>
              </div>
            </div>
            <div></div>

            <div className="container-size-box">
              {filterData.sizes.map((size, i) => {
                const { sizeShoes } = this.state;
                return (
                  <div
                    className="size-box"
                    key={i}
                    style={
                      sizeShoes === size
                        ? { backgroundColor: "black", color: "white" }
                        : { color: "black" }
                    }
                    name="sizeShoes"
                    value={size}
                    onClick={() => this.sizeSelected(size)}
                  >
                    <h4 className="text-inside-box">{size}</h4>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="detail-size">
                <div className="detail-size-name">
                  <h3 className="text-size">SELECT COLOR</h3>
                </div>
              </div>
              <div></div>

              <div className="container-color-box">
                {filterData.colors.map((color, index) => {
                  return (
                    <div
                      // className="color-circle"
                      className="color-circle"
                      style={
                        colorShoes === color.color_hash
                          ? {
                              backgroundColor: color.color_hash,
                              border: "5px solid #000000",
                              color: "green",
                            }
                          : { backgroundColor: color.color_hash }
                      }
                      key={index}
                      onClick={() => this.colorSelected(color.color_hash)}
                    ></div>
                  );
                })}
              </div>
            </div>

            <div className="detail-addbag">
              <div className="detail-addbag-left">
                <img
                  src={require("../../assets/icons/free-delivery.png").default}
                />

                <div className="detail-addbag-name">
                  free shipping over $100 purchase
                </div>
              </div>
              <Link to="/bag" onClick={() => this.gotoBagPage()}>
                <div className="detail-addbag-right">
                  <div className="detail-addbag-button">
                    add to bag — ${filterData.price} {"—>"}
                  </div>
                </div>
              </Link>
            </div>
            <div className="footer"></div>
          </div>
        );
      });
  };

  render() {
    const { name } = this.props.match.params;
    console.log("CEK PARAM di RENDER", name);
    return <>{this.detailData()}</>;
  }
}

const mapStatetoProps = (state) => ({
  getProductListResult: state.ReducerProductAPI.getProductListResult,
  getProductListLoading: state.ReducerProductAPI.getProductListResult,
  getProductListError: state.ReducerProductAPI.getProductListError,
});

const mapDispatchToProps = (dispatch) => ({
  detailProduct: (detailData) =>
    dispatch({ type: "detail_ok", payload: { detailData } }),
});

export default connect(mapStatetoProps, mapDispatchToProps)(DetailPage);
