import React from "react";
import { useState } from "react";
import ProductFile from "./ProductFile";
import './style.css'

const Product = ({ id, name, cost, inEdit, editProd, editMode, editProduct, catg, saveFunct }) => {


  return <>
    <tr>
      <ProductFile name={name} id={id} editProduct={editProduct} name1={'name'} saveFunct={saveFunct}/>
      <ProductFile name={cost} id={id} editProduct={editProduct} name1={'cost'} saveFunct={saveFunct}/>
      <ProductFile name={catg} id={id} editProduct={editProduct} name1={'catg'} saveFunct={saveFunct}/>
    </tr>
  </>
}

export default Product;