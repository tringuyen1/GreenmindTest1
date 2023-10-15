import React from 'react'
import vector from "../Images/Vector.svg";
import line from "../Images/Line 2.svg";
import Rectangle from "../Images/Screenshot 2023-10-13 193053.png";

const HeroSection = () => {
    return (
        <section className="hero-sections">
            <div className="row">
                <div className="col-md-12 col-lg-12 col-xl-6">
                    <div className='hero-left'>
                        <h1 className="title">Buy your dream plants</h1>
                        <div className="row">
                            <div className="col-4">
                                <div className='content'>
                                    <div className="text">
                                        50+
                                    </div>
                                    <div className="plant">
                                        Plant Species
                                    </div>
                                </div>
                            </div>

                            <img className="" src={line} alt=""></img>

                            <div className="col-4">
                                <div className='content'>
                                    <div className="text">
                                        50+
                                    </div>
                                    <div className="plant">
                                        Plant Species
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className='vector-wrapper'>
                                    <input type="text" className="looking-for" placeholder="What are you looking for?"></input>
                                    <div className='vector-img'>
                                        <img src={vector} alt='' className='vector'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-6">
                    <div className="hero-right">
                        <img src={Rectangle} className="image" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
