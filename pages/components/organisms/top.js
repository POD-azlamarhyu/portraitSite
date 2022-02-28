import Image from "next/image";
import React from "react";
import Img1 from "../../../public/img1.JPG";
import Img2 from "../../../public/img2.JPG";
import Img3 from "../../../public/img3.JPG";
import Img4 from "../../../public/img4.png";
import Img5 from "../../../public/00098_Moment_e.svg";
import Header from './header';
import Footer from './footer';


const Top = () => {

    return(
        <>
            <Header />
            <div className="m-0 p-0 bg-gray-700">
                <div className="m-0 p-0">
                    <Image src={Img5} alt="topimg" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Top;