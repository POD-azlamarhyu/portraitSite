import Image from "next/image";
import React from "react";
import Header from './header';
import Footer from './footer';
const topImage = require("../../../public/portrait_top.png").default;

const Top = () => {
    return(
        <>
            <Header />
            <div className="m-0 p-0 bg-gray-700">
                <div className="m-0 p-0">
                    <img src={topImage.src} alt="topimg" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Top;