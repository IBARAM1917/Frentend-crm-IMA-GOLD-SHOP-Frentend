import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Dashboarddesigns = () => {

    return (
        <div>
          <Card>
            <Card.Img
            className='image  gap-3 py-3 px-4'
            src='https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175533_640.jpg'
            alt='list_imag' />
               <Card.Img
            className='image gap-3 py-3 px-4'
            src='https://cdn.britannica.com/16/47016-050-750238DA/brooch-emeralds-Stomacher-flowers-enamel-treasure-gold.jpg'
            alt='list_imag' />
               <Card.Img
            className='image  gap-3 py-3 px-4'
            src='https://media.cnn.com/api/v1/images/stellar/prod/skin-studio-lifestyle-cnnu.jpg?q=h_1018,w_1810,x_0,y_0'
            alt='list_imag' />
              <Card.Img
            className='image  gap-3 py-3 px-4'
            src='https://i.etsystatic.com/25703673/r/il/2594fd/3274856993/il_570xN.3274856993_hh37.jpg'
            alt='list_imag' />
          
            
          </Card>
        </div>
    );
};

export default Dashboarddesigns;