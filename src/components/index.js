import React from 'react'
import '../scss/green-mind.scss'

import HeaderMenuMobile from './header-menu-mobile';
import Header from './header';
import Footer from './footer';
import HeroSection from './hero-section';
import SaleSection from './sale-section';
import About from './about';
import Categories from './categories';
import SlideBar from './slide-bar';

const GreenMind = () => {
     return (
          <div className="green-mind">
               <Header></Header>
               <HeaderMenuMobile />
               <section className="wrapper-green-mind">
                    {/* <div className="container"> */}
                    <div className='container'>
                         <HeroSection></HeroSection>
                    </div>
                    <SaleSection />
                    <About />
                    <Categories />
                    <SlideBar />
                    {/* </div> */}
               </section>
               <Footer></Footer>
          </div>
     )
}

export default GreenMind
