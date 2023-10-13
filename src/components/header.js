import React from 'react'
import '../scss/green-mind.scss'
import ImageGreenMind from '../Images/GREENMIND.svg'
import '../scss/header.scss'
const Header = () => {
    return (
        <section className="header-menu mt-4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='menu-link'>
                            <img src={ImageGreenMind} alt="" className='img-green-mind mt-1'></img>
                            <ul className="link">
                                <li>
                                    <a href="/" className="" alt="">Home</a>
                                </li>
                                <li>
                                    <a href="/" className="" alt="">Product</a>
                                </li>
                                <li>
                                    <a href="/" className="" alt="">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col d-flex">
                        <ul className='menu-icon'>
                            <li>
                                <img className="" src={require('../Images/Cart.png')} alt=""></img>
                            </li>
                            <li>
                                <img className="" src={require('../Images/Person.png')} alt=""></img>
                            </li>
                            <li>
                                <img className="" src={require('../Images/Line 1.png')} alt=""></img>
                            </li>
                            <li>
                                <img className="" src={require('../Images/FilterRight.png')} alt=""></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
