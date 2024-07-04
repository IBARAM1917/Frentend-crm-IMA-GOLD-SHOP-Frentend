
import React from 'react';
import Card from '../Components/Card';

const Bangles = ({products}) => {
    const bangle =products.filter((element)=>element.head ==="IBA Gold Bangle ")
    return (
        <div className="container">
      <div className="row py-5 d-flex justify-content-center">
       <Card products={bangle} />
      </div>
    </div>
    );
};

export default Bangles;