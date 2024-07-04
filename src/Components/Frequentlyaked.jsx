
import React from 'react';
import ACCordion from './ACCordion';

const Frequentlyaked = () => {
    return (
        <div className='min-h-screen mb-5'>
            <div className='max-w-5xl mx-10'>
                <div className='p-4 bg-slate-400 rounded-lg'>
                    <ACCordion
                    title="Are pendants available with the chain?"
                    answer="Yes. We have a range of chains for you. You need to select the preferred pendant and you can also find an option to check out the chains. The price that is mentioned near pendant is only for the pendant and the cost of chain is separate. Once you have selected the pendant, you need to click on BUY NOW option and later browse for gold or 22Kt Yellow chain."
                    />
                       <ACCordion
                    title="Do you deal with Conflict Free diamonds?"
                    answer="malabargoldanddiamonds.com uses only conflict-free diamonds that are acquired from legitimate diamond sources. These are certified through famous Kimberley Process Certification Scheme (KPCS)."
                    />
                       <ACCordion 
                    title="If I lose my jewellery certificate, can I get a duplicate one?"
                    answer="For just a price of Rs.500, we can provide you with duplicate certificate. “Copy/ duplicate” will be written across such certificate."
                    />
                       <ACCordion 
                    title="Are there any differences in price of the products that are sold on this website and in other retail stores?"
                    answer="Due to different regional price of gold, there may be differences in prices of the products sold."
                    />
                       <ACCordion 
                    title="Is there an option of getting jewellery with different metal or gemstone that is not offered on malabargoldanddiamonds.com website?"
                    answer="For this purpose, you need to call our customer care team and they will provide you with the choices."
                    />
                       <ACCordion
                    title="What if I do not find the piece that I wanted on the site anymore?. Can I still place an order?"
                    answer="Sometimes we do not have certain pieces in our stock. Or,  it might have been relocate it to any other page. But if you really need the desired product, we will always try our best to help you get the same. For this, you need to get in touch with the customer care team on +91 22 62300916."
                    />

                </div>
            </div>
            
        </div>
    );
};

export default Frequentlyaked;