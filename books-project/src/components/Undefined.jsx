import React from "react";
import { Link } from "react-router-dom";

function Undefined() {
  return (
    <div className="undefined">
      <h1>ARADIĞINIZ SAYFA BULUNAMADI</h1>
      <h1>
        <Link to="/home">Anasayfa</Link> 'ya göz atın
      </h1>
    </div>
  );
}

export default Undefined;
