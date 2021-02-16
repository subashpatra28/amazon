import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v1/Phase2_Rec_PC_Hero_1x._CB417639218_.jpg' />
                <div className='home__row'>
                    <Product title='Atomic Habits'
                        id={324760239847}
                        price={499}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg'
                        rating={3}
                    />
                    <Product title='Atomic Habits'
                        id={324780289847}
                        price={499}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg'
                        rating={3}
                    />
                </div>
                <div className='home__row'>
                    <Product title='Atomic Habits'
                        id={324780539847}
                        price={499}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg'
                        rating={3}
                    />
                    <Product title='Atomic Habits'
                        id={324780439847}
                        price={499}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg'
                        rating={3}
                    />
                    <Product title='Atomic Habits'
                        id={424780239847}
                        price={499}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg'
                        rating={3}
                    />
                </div>
                <div className='home__row'>
                    <Product title='Atomic Habits'
                        id={324680239847}
                        price={499}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg'
                        rating={3}
                    />
                </div>
            </div>



        </div>
    )
}

export default Home