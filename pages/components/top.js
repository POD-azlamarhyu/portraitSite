import Image from "next/image";
import React from "react";
import Header from './header';
import Footer from './footer';

const topImages = [
    {
        image:require("../../public/topimage1.png").default,
    },
    {
        image:require("../../public/topimage2.png").default,
    },
    {
        image:require("../../public/topimage3.png").default,
    },
    {
        image:require("../../public/topimage4.png").default,
    }
];

const Top = () => {
    return(
        <>
            <Header />
            {
                topImages.map((content) => {
                    return (
                        <div className="m-0 p-0 bg-gray-700">
                            <div className="m-0 p-0">
                                <img src={content.image.src}/>
                            </div>
                        </div>
                    );
                })
            }
            <Footer />
        </>
    );
}

export default Top;