import React from 'react';
import Card from '../Components/Card';

const Earings = ({products}) => {
    const earring =products.filter((element)=> element.head ==="IBA Gold Earring ")
    return (
        <div className="container">
      <div className="row py-5 d-flex justify-content-center">
       <Card products={earring} />
      </div>
    </div>
    );
};

export default Earings;