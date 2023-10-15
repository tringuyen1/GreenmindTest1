import React from 'react'
import Image1 from "../Images/Frame 9.png";
import Image2 from "../Images/Frame 8.png";
import Image3 from "../Images/Frame 7.png";

const SaleSection = () => {
    return (
        <section className="sale-sections mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mid-center">
                        <h1 className="header">Best Selling Plants</h1>
                        <p className="title">
                            Easiest way to healthy life by buying your favorite plants
                        </p>

                        <button className="see-more">
                            See more
                        </button>
                    </div>

                    <div className="col-md-12 col-lg-3">
                        <div className="card">
                            <img className="" src={Image1} alt=""></img>

                            <p className="header-card">
                                Natural Plants
                            </p>

                            <p className="price-card">
                                ₱ 1,400.00
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3">
                        <div className="card">
                            <img className="" src={Image2} alt=""></img>

                            <p className="header-card">
                                Natural Plants
                            </p>

                            <p className="price-card">
                                ₱ 1,400.00
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3">
                        <div className="card">
                            <img className="" src={Image3} alt=""></img>

                            <p className="header-card">
                                Natural Plants
                            </p>

                            <p className="price-card">
                                ₱ 1,400.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaleSection
