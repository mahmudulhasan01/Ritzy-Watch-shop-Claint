import React from "react";
import Footer from "../Shared/Footer";
import Nabver from "../Shared/Nabver";
import Bannar from "./Bannar/Bannar";
import ExtraBannar from "./ExtraBannar/ExtraBannar";
import ImagesBannar from "./ExtraBannar/ImagesBannar";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Nabver></Nabver>
      <Bannar></Bannar>
      <Products></Products>
      <ImagesBannar></ImagesBannar>
      <ExtraBannar></ExtraBannar>
      <Footer></Footer>
    </div>
  );
};

export default Home;
