import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                {/* <h2>NextJs Carousel - GeeksforGeeks</h2> */}
                <Carousel>
                    <section class="text-gray-600 body-font bg-cyan-50">
                        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 class="title-font sm:text-7xl text-3xl mb-4 font-bold text-gray-900">Lesson and insights</h1>
                                <h1 class="title-font sm:text-7xl text-3xl mb-4 font-bold text-green-600">from 8 years</h1>
                                <p class="mb-8 leading-relaxed">Where to grow your business as a photographer: site or social media?</p>
                                <div class="flex justify-center">
                                    <button class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">Register</button>
                                </div>
                            </div>
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img class="object-cover object-center rounded" alt="hero" src="person.png" />
                            </div>
                        </div>
                    </section>
                    <section class="text-gray-600 body-font bg-cyan-50">
                        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 class="title-font sm:text-7xl text-3xl mb-4 font-bold text-gray-900">Lesson and insights</h1>
                                <h1 class="title-font sm:text-7xl text-3xl mb-4 font-bold text-green-600">from 8 years</h1>
                                <p class="mb-8 leading-relaxed">Where to grow your business as a photographer: site or social media?</p>
                                <div class="flex justify-center">
                                    <button class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">Register</button>
                                </div>
                            </div>
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img class="object-cover object-center rounded" alt="hero" src="test-2.png" />
                            </div>
                        </div>
                    </section>
                    <section class="text-gray-600 body-font bg-cyan-50">
                        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 class="title-font sm:text-7xl text-3xl mb-4 font-bold text-gray-900">Lesson and insights</h1>
                                <h1 class="title-font sm:text-7xl text-3xl mb-4 font-bold text-green-600">from 8 years</h1>
                                <p class="mb-8 leading-relaxed">Where to grow your business as a photographer: site or social media?</p>
                                <div class="flex justify-center">
                                    <button class="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">Register</button>
                                </div>
                            </div>
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img class="object-cover object-center rounded" alt="hero" src="test-3.png" />
                            </div>
                        </div>
                    </section>



                </Carousel>
            </div>
        );
    }
};
