import { Button } from "flowbite-react";
import React, { useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { CardBody, CardText, CardTitle } from "react-bootstrap";


const Card = ({ items,setItems,products,count,setCount,cart,setCart }) => {
 
  const handleAdd=()=>{
    setCount((initialInc)=>initialInc+1);
  };
  const handleRemove=()=>{
    if(count>0){
      setCount((initialDec)=>initialDec-1);
    }
  }
  const handleClick =(id)=>{
    if(cart.includes(id)){
      let newCart =cart.filter((element)=> element !== id);
      console.log(newCart)
      setCart(newCart);
      handleRemove();
    }else{
      cart.push(id);
      console.log(cart)
      handleAdd();
    }
  }


    return(
    <div className="Card " > 
    <div className="py-2 px-2 width: 14rem;" >
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-center gap-4">
      
      {products?.map((element,index)=>{
       return (  
       <div className="Card-body " key={index}> 
        <div  key={element.id} >
         <img src={element.image} className="card-img-top mb-2" alt="card_img" />
         
        <div className="col mb-5  ">
          <b>
            <h5 className="card-title">{element.head}</h5>
          </b>
          <h5 className="card-title">{element.title}</h5>
          <b>
            <p className="card-text">{element.description}</p>
          </b>
          <p className="card-text">{element.collection}</p>
          <p className="card-text">{element.gender}</p>
          <p className="card-text">{element.occasion}</p>
          <p className="card-text">{element.karatage}</p>
          <p className="txt my-2">₹{element.price}</p>
         
          
             
        </div>
        </div>
          <div className="button-container">
          <Link to={`/productsdetail/${element.id}`}>
                        <Button >Buy Now</Button>
                        </Link>
          
            
            </div>
            
         
           </div>
            )
       
           })}
           
        </div>
        </div>
        </div>
    );

};

export default Card;
