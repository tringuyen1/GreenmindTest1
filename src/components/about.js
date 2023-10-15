import React from 'react'
import Vector3 from "../Images/Vector3.svg";
import Vector4 from "../Images/Vector (1).svg";
import Vector5 from "../Images/Vector (2).svg";


const About = () => {
    return (
        <section className="about-us-sections mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='heading'>
                            <h1 className="header">About us</h1>

                            <p className="title">
                                Order now and appreciate the beauty of nature
                            </p>
                        </div>
                    </div>

                    <div className="col-12 mt-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div className='box'>
                                    <div className='img-header'>
                                        <img className="" src={Vector3} alt=""></img>
                                    </div>

                                    <h3 className="header">
                                        Large Assortment
                                    </h3>

                                    <p className="title">
                                        we offer many different types of products with fewer variations in each category
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-4">
                                <div className='box'>
                                    <div className='img-header'>
                                        <img className="" src={Vector4} alt=""></img>
                                    </div>

                                    <h3 className="header">
                                        Large Assortment
                                    </h3>

                                    <p className="title">
                                        we offer many different types of products with fewer variations in each category
                                    </p>
                                </div>

                            </div>

                            <div className="col-md-12 col-lg-4">
                                <div className='box'>
                                    <div className='img-header'>
                                        <img className="" src={Vector5} alt=""></img>
                                    </div>

                                    <h3 className="header">
                                        Large Assortment
                                    </h3>

                                    <p className="title">
                                        we offer many different types of products with fewer variations in each category
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About