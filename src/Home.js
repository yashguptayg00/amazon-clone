import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"              
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    />
                 <div className="home__row">
                    <Product 
                    id="123231341"
                    title='The Lean Startup' 
                    price ={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61HIqJZKPkS._SX450_.jpg"
                     rating={4}   
                    />
                    <Product
                    id="49234567"
                    title=" Kenwood kMix Stand Mixer"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg" 
                        
                    />                    
                 </div>

                 <div className="home__row">
                 <Product
                    id="3456789"
                    title="Samsung 49' Curved Monitor"
                    price={198.99}
                    rating={5}                    
                    image="https://images-eu.ssl-images-amazon.com/images/I/41s7nV7pulL._SY300_SX300_QL70_FMwebp_.jpg"

                  />
                 <Product
                    id="3345664"
                    title="Amazon Echo 3rd Gen"
                    price={98.99}
                    rating={4}                    
                    image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
                 />
                 <Product
                    id="1256789"
                    title="Apple ipad pro"
                    price={598.99}
                    rating={5}                    
                    image="https://images-eu.ssl-images-amazon.com/images/I/51MoqQUJnoS._SY445_SX342_QL70_FMwebp_.jpg" 

                />
                 </div>

                 <div className="home__row">
                 <Product
                    id="3456789"
                    title="Samsung 49' Curved Monitor"
                    price={98.99}
                    rating={5}                    
                    image="https://images-eu.ssl-images-amazon.com/images/I/41s7nV7pulL._SY300_SX300_QL70_FMwebp_.jpg"
                 />               
                 </div>

            </div>
        </div>
    )
}

export default Home
