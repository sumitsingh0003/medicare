import { React, useState, useEffect } from 'react'
import { images } from '../assets/images'
import { Quote } from '../assets/svg/index'
import OwlCarousel from 'react-owl-carousel';
import axios from "axios"

const Customer = () => {
    const [customerData, setCustomerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getReviewData = async () => {
        try {
            const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
            setCustomerData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('There was a problem fetching data.');
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        getReviewData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <section className='customer_reviews'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='cstmrHdng'>
                                <h2>What Our Customers Say</h2>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <OwlCarousel
                                className="owl-theme"
                                loop={true}
                                margin={20}
                                nav={false}
                                dots={false}
                                autoplay
                                autoplayTimeout={3000}
                                responsive={{
                                    0: {
                                        items: 1,
                                        nav: false,
                                        loop: true
                                    },
                                    600: {
                                        items: 2,
                                        nav: false,
                                        loop: true
                                    },
                                    1000: {
                                        items: 2,
                                        nav: false,
                                        loop: true
                                    }
                                }}
                            >
                                {customerData.map((val, index) => (
                                    <div className="item" key={index}>
                                        <div className='cstmrCol'>
                                            <div className='quoteSymbl'><Quote /></div>
                                            <div className='reviews'>
                                            <p>{val.Reviews}</p>
                                            </div>
                                            <div className='custmrName'>
                                                <div className='custmerImg'>
                                                    <img src={images.Customer} alt='Customer Img' />
                                                </div>
                                                <div className='custmrCont'>
                                                    <h5>{val.Name}</h5>
                                                    <span>{val.Platform}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customer
