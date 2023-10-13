import React from 'react'
import ImageGreenMind from '../Images/GREENMIND.svg'
import facebook from '../Images/Group 11.svg'
import insta from '../Images/Group 12.svg'
import linkedln from '../Images/Group 13.svg'
import '../scss/footer.scss'
const Footer = () => {
    return (
        <section className="footer mt-5">
            <div className="container">
                <div className="link-contact pt-4 pb-4">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-12 col-lg-6 mid-center">
                            <div className="link">
                                <img src={ImageGreenMind} alt="" className='img-green-mind'></img>

                                <p className="title mt-4">
                                    We help you find your dream plant
                                </p>

                                <div className="link-detail mt-4">
                                    <img className="fb pr-3" src={facebook} alt=""></img>
                                    <img className="inst pr-3" src={insta} alt=""></img>
                                    <img className="linkedln pr-3" src={linkedln} alt=""></img>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6 ml-auto mid-center">
                            <div className='menu-link'>
                                <ul>
                                    <li className='header'>
                                        <h3>Information</h3>
                                    </li>
                                    <li className='pt-2'>
                                        <a href="/" className="" alt="">About</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className="" alt="">Product</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className="" alt="">Blog</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='header'>
                                        <h3>Company</h3>
                                    </li>
                                    <li className='pt-2'>
                                        <a href="/" className="" alt="">Community</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className="" alt="">Career</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className="" alt="">Our story</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='header'>
                                        <h3>Contact</h3>
                                    </li>
                                    <li className='pt-2'>
                                        <a href="/" className="" alt="">Getting Started</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className="" alt="">Pricing</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className="" alt="">Resources</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="note mt-5 pb-4">
                    2023 all Right Reserved Term of use GREENMIND
                </p>

            </div>
        </section>
    )
}

export default Footer
