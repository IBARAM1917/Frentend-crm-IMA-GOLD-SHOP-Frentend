
import React from 'react';
import Card from '../Components/Card';

const Rings = ({products}) => {
    const ring =products.filter((element)=> element.head ==="IBA Gold RIngs ")
    return (
        <div className="container">
      <div className="row py-5 d-flex justify-content-center">
       <Card products={ring} />
      </div>
    </div>
    );
};

export default Rings;