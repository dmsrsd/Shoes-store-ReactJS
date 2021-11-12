import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";

import "./column.css";

const gotoDetailPage = () => {
  Swal.fire({
    title: "Detail Product",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

const Menus = (product) => {
  console.log("DATA DARI DEPAN", product);
  return (
    <Col md={3} xs={3} className="mt-4">
      <div className="productCard">
        <Card onClick={() => gotoDetailPage()}>
          <Link to={"/detail/" + product.menu.name}>
            <Card.Img
              className="gambar"
              variant="top"
              src={
                require(`../../assets/images/` +
                  `${product.menu.name}` +
                  `.png`).default
              }
            />
          </Link>
          <Card.Body>
            <div className="descrip">
              <Card.Title className="name">{product.menu.name}</Card.Title>
              <Card.Text className="price">${product.menu.price}</Card.Text>
            </div>
            <Card.Text className="categoryMenu">
              {product.menu.category}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Menus;
