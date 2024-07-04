import React from 'react';
import Card from '../Components/Card';

const Jewellerys = ({products}) => {
    const jewellery =products.filter((element)=> element.head === "IBA Gold Jewellery")
   // console.log(jewellery);
    return (
        <div className="container">
      <div className="row py-2 d-flex justify-content-center">
        <Card products={jewellery} />
      </div>
    </div>
    );
};

export default Jewellerys;