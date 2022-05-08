import Image from "next/image";
import React from "react";
import Header from './header';
import Footer from './footer';
const topImage1 = require("../../../public/portrait_top.png").default;
const topImage2 = require("../../../public/portraitsite_top2.png").default;
const topImage3 = require("../../../public/portraitsite_top3.png").default;

const Top = () => {
    return(
        <>
            <Header />
            <div className="m-0 p-0 bg-gray-700">
                <div className="m-0 p-0">
                    <img src={topImage1.src} alt="topimg" />
                </div>
            </div>
            <div className="m-0 p-0 bg-gray-700 block">
                <div className="m-0 p-0">
                    <img src={topImage2.src} alt="topimg2"/>
                </div>
            </div>
            <div className="m-0 p-0 bg-gray-700 block">
                <div className="m-0 p-0">
                    <img src={topImage3.src} alt="topimg2"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Top;