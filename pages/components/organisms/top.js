import Image from "next/image";
import React from "react";
import Header from './header';
import Footer from './footer';
const topImage1 = require("../../../public/portrait_top.png").default;
const topImage2 = require("../../../public/00239_Moment.jpg").default;

const Top = () => {
    return(
        <>
            <Header />
            <div className="m-0 p-0 bg-gray-700">
                <div className="m-0 p-0">
                    <img src={topImage1.src} alt="topimg" />
                </div>
            </div>
            <div className="m-0 p-0 bg-gray-700 block lg:hidden">
                <div className="m-0 p-0">
                    <img src={topImage2.src} alt="topimg2"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Top;