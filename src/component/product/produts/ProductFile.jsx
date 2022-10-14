import React, { useState } from "react";

const ProductFile = ({id,name,editProduct,name1,saveFunct}) =>{
    const [editInput,setEditInput]= useState(false);

    return <td>
        { editInput
        ? <input value={name} onBlur={()=>setEditInput(!editInput)} onChange={(event)=>editProduct(id,name1,event)}/> 
        :<span onClick={()=>{setEditInput(!editInput)}}>{name}</span> }
        </td>
    
    //<input value={name} onChange={(event)=>editProduct(id,name1,event)}/>
}

export default ProductFile;