import React from "react";

const Product = () => {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <img
        src="https://staticimg.titan.co.in/Titan/Catalog/1696KC01_1.jpg?pView=listing"
        className="card-img-top p-1"
        alt="..."
      />
      <div className="card-body">
        <h6 className="fw-bold">
          Edge Ceramic Midnight Gold - Slimmest Ceramic Analog Watch
        </h6>
        <p className="fw-bold">$366</p>
        <button type="button" class="btn btn-dark fw-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
