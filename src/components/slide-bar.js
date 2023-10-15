import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import customer from "../Images/Group 9.svg"
import star from "../Images/Vector4.svg"
const SlideBar = () => {
    return (
        <section className='wrapper-sidebar mt-5'>
            <div className='sidebar position-ralative'>
                <div className='header-customers'>
                    <div className='container ml-0'>
                        <div className='row'>
                            <div className='col p-0'>
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
    )
}


export default SlideBar;