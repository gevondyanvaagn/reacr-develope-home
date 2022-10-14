import React, { useState } from "react";
import Product from './produts/Product';
const initProds = [
  { id: 'wadawdfff', name: 'product1', cost: 100, catg: 'catg1' },
  { id: 'awdcxcwag', name: 'product2', cost: 200, catg: 'catg2' },
  { id: 'awawdvgtr', name: 'product3', cost: 300, catg: 'catg3' },
  { id: 'acagdvgtr', name: 'product4', cost: 300, catg: 'catg4' },
  { id: 'aacvavgtr', name: 'product5', cost: 300, catg: 'catg5' },
];

const Products = () => {
  const [prods, setProds] = useState(initProds);

  const editProd =(id,value,e)=>{
    setProds(prods.map(item=>{
      if(item.id === id){
        item.inEdit = !item.inEdit;
      } 
        return item
    }))
  }

  const editMode =(id)=>{
    editProd(id);

  }

  const editProduct =(id,prop,e)=>{
    setProds(prods.map(item=>{
      if(item.id === id){
        item[prop]=e.target.value;
      }
      return item
    }))
  }

  const saveFunct =()=>{
    
  }

  const result = prods.map(item => {
    return <Product
      key={item.id}
      id={item.id}
      name={item.name}
      cost={item.cost}
      inEdit={item.inEdit}
      editProd={editProd}
      editMode={editMode}
      editProduct={editProduct}
      catg={item.catg}
    />

  })
  return <>
  <table>
    <tbody>
     {result}
    </tbody>
  </table>
    
  </>
}

export default Products;