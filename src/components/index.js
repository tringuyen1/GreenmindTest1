import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/green-mind.scss'
import unsplash from '../Images/unsplash_cLaaxa4DSnc-removebg-preview 1.svg';
import vector from "../Images/Vector.svg";
import Vector1 from '../Images/Vector 186.svg';
import Vector2 from '../Images/Vector 187.svg';
import line from "../Images/Line 2.svg";
import Rectangle from "../Images/Rectangle 2.svg";
import Image1 from "../Images/Frame 9.svg";
import Image2 from "../Images/Frame 8.svg";
import Image3 from "../Images/Frame 7.svg";
import Vector3 from "../Images/Vector3.svg";
import Vector4 from "../Images/Vector (1).svg";
import Vector5 from "../Images/Vector (2).svg";
import Frame1 from "../Images/Frame 36.svg"
import Frame2 from "../Images/Frame 38.svg"
import Frame3 from "../Images/Frame 37.svg"
import customer from "../Images/Group 9.svg"
import star from "../Images/Vector4.svg"
import HeaderMenuMobile from './header-menu-mobile';
import Header from './header';
import Footer from './footer';

const GreenMind = () => {

     return (
          <div className="green-mind">
               <Header></Header>
               <HeaderMenuMobile />

               <section className="wrapper-green-mind">
                    {/* <div className="container"> */}
                    <div className='container'>
                         <section className="hero-sections">
                              <div className="row">
                                   <div className="col-md-12 col-lg-4">
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

                                   <div className="col-md-12 col-lg-8">
                                        <div className="hero-right">
                                             <img src={Vector1} className="vector-1" alt=""></img>
                                             <img src={unsplash} alt='' className='unsplash-img'></img>
                                             <div className="unsplash">
                                                  <img src={Rectangle} className="rectangle-img" alt=""></img>
                                             </div>

                                             <img className="vector-2" src={Vector2} alt=""></img>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>

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


                    <section className="categories-sections mt-5">
                         <div className="row">
                              <div className="col-12">
                                   <div className='heading'>
                                        <h1 className="header">Categories</h1>

                                        <p className="title">
                                             Find what you are looking for
                                        </p>
                                   </div>
                              </div>

                              <div className="col">
                                   <div className="categories-detail mt-5">
                                        <div className="row">
                                             <div className="col-md-12 col-lg-4">
                                                  <div className='box-middle custom-margin-bottom'>
                                                       <img className="" src={Frame1} alt=""></img>
                                                       <h3 className="header">
                                                            Natural Plants
                                                       </h3>
                                                  </div>

                                             </div>

                                             <div className="col-md-12 col-lg-4">
                                                  <div className='box-middle custom-margin-top'>
                                                       <img className="" src={Frame2} alt=""></img>
                                                       <h3 className="header">
                                                            Plant Accessories
                                                       </h3>

                                                       <p className="title">
                                                            Horem ipsum dolor sit amet, consectetur adipiscing elit.
                                                       </p>

                                                       <button className='explore'>
                                                            Explore
                                                       </button>
                                                  </div>
                                             </div>

                                             <div className="col-md-12 col-lg-4">
                                                  <div className='box-middle custom-margin-bottom-last'>
                                                       <img className="" src={Frame3} alt=""></img>
                                                       <h3 className="header">
                                                            Natural Plants
                                                       </h3>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>


                    </section>

                    <section className='wrapper-sidebar mt-5'>
                         <div className='container position-ralative'>
                              <div className='header-customers'>
                                   <div className='row'>
                                        <div className='col'>
                                             <h3 className='header-comment'>
                                                  What customers say about GREENMIND?
                                             </h3>
                                        </div>

                                        <div className='col'>
                                             <div className='icon-srcoll'>
                                                  <div className="pagination mt-3"></div>
                                             </div>
                                        </div>
                                   </div>

                                   <Swiper
                                        slidesPerView={'auto'}
                                        spaceBetween={30}
                                        pagination={{
                                             el: '.pagination',
                                             clickable: true
                                             //...
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper mt-4"
                                        paginationClickable={true}
                                   >
                                        <SwiperSlide>
                                             <div className='box-comment'>
                                                  <div className='row'>
                                                       <div className='col-12'>
                                                            <p className='comment'>
                                                                 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                            </p>
                                                       </div>
                                                       <div className='col-12'>
                                                            <div className='box'>

                                                                 <div className='box-cus'>
                                                                      <img src={customer} alt='' className='custom-img'></img>
                                                                      <div className='customer mt-5'>
                                                                           <h3 className='name'>
                                                                                John Doe
                                                                           </h3>

                                                                           <p className='job'>
                                                                                Youtuber
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                                 <div className='box-cus ml-auto'>
                                                                      <img src={star} alt='' className='custom-img-start'></img>
                                                                      <h3 className='point mt-5'>
                                                                           4.5
                                                                      </h3>
                                                                 </div>
                                                            </div>


                                                       </div>
                                                  </div>
                                             </div>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                             <div className='box-comment'>
                                                  <div className='row'>
                                                       <div className='col-12'>
                                                            <p className='comment'>
                                                                 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                            </p>
                                                       </div>
                                                       <div className='col-12'>
                                                            <div className='box'>

                                                                 <div className='box-cus'>
                                                                      <img src={customer} alt='' className='custom-img'></img>
                                                                      <div className='customer mt-5'>
                                                                           <h3 className='name'>
                                                                                John Doe
                                                                           </h3>

                                                                           <p className='job'>
                                                                                Youtuber
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                                 <div className='box-cus ml-auto'>
                                                                      <img src={star} alt='' className='custom-img-start'></img>
                                                                      <h3 className='point mt-5'>
                                                                           4.5
                                                                      </h3>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                             <div className='box-comment'>
                                                  <div className='row'>
                                                       <div className='col-12'>
                                                            <p className='comment'>
                                                                 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                            </p>
                                                       </div>
                                                       <div className='col-12'>
                                                            <div className='box'>

                                                                 <div className='box-cus'>
                                                                      <img src={customer} alt='' className='custom-img'></img>
                                                                      <div className='customer mt-5'>
                                                                           <h3 className='name'>
                                                                                John Doe
                                                                           </h3>

                                                                           <p className='job'>
                                                                                Youtuber
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                                 <div className='box-cus ml-auto'>
                                                                      <img src={star} alt='' className='custom-img-start'></img>
                                                                      <h3 className='point mt-5'>
                                                                           4.5
                                                                      </h3>
                                                                 </div>
                                                            </div>


                                                       </div>
                                                  </div>
                                             </div>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                             <div className='box-comment'>
                                                  <div className='row'>
                                                       <div className='col-12'>
                                                            <p className='comment'>
                                                                 Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                            </p>
                                                       </div>
                                                       <div className='col-12'>
                                                            <div className='box'>

                                                                 <div className='box-cus'>
                                                                      <img src={customer} alt='' className='custom-img'></img>
                                                                      <div className='customer mt-5'>
                                                                           <h3 className='name'>
                                                                                John Doe
                                                                           </h3>

                                                                           <p className='job'>
                                                                                Youtuber
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                                 <div className='box-cus ml-auto'>
                                                                      <img src={star} alt='' className='custom-img-start'></img>
                                                                      <h3 className='point mt-5'>
                                                                           4.5
                                                                      </h3>
                                                                 </div>
                                                            </div>


                                                       </div>
                                                  </div>
                                             </div>

                                        </SwiperSlide>
                                   </Swiper>
                              </div>

                         </div>
                    </section>
                    {/* </div> */}
               </section>

               <Footer></Footer>
          </div>
     )
}

export default GreenMind
