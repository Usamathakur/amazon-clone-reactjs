import React from 'react'

import Product from './Product';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="">

            </img>
            <div className="home__row">
                <Product
                    id="121"
                    title="Icebox Watch: Collection"
                    price={11.96}
                    rating={5}
                    image="https://ecommercephotographyindia.com/assets/img/gallery/thumbnail/watch/6.jpg"
                />
                <Product
                    id="121"
                    title="Icebox Watch: Box"
                    price={11.96}
                    rating={5}
                    image="https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/da7e84a96b73c5cde82b46ab32c25765.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="121"
                    title="Icebox Watch: Combo of Three"
                    price={11.96}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShVfrlMaGMg4MdajvqFL1shv_ZZQtIgnBzFQ&usqp=CAU"
                />
                <Product
                    id="121"
                    title="Icebox Watch: Pump Design"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/736x/4f/c9/47/4fc947c6636135f5378572e4212aa315.jpg"
                />
                <Product
                    id="121"
                    title="Icebox Watch: Slaughter Chain"
                    price={11.96}
                    rating={5}
                    image="https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ5NDc0OTA0MDcxMjE4ODM1/mc-6.jpg"
                />
            </div>
        
       
        
        </div>
    )
}

export default Home
