import Image from "next/image";
import React from "react";
import Img1 from "../../../public/img1.JPG";
import Img2 from "../../../public/img2.JPG";
import Img3 from "../../../public/img3.JPG";
import Img4 from "../../../public/img4.png";
import Header from './header';
import Footer from './footer';

const Top = () => {

    return(
        <>
        <Header />
        <div className="relative m-auto">
            <Image 
                className="w-screen h-screen"
                src={Img1}
                alt="img"
            />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-screen text-white bg-white bg-opacity-25">
                <p className="text-9xl text-center text-gray-200 font-bold">
                    Welcome to Portrait Site!!
                </p>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Top;