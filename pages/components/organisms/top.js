import Image from "next/image";
import React from "react";
import Header from './header';
import Footer from './footer';


const Top = () => {

    return(
        <>
            <Header />
            <div className="m-0 p-0 bg-gray-700">
                <div className="m-0 p-0">
                    <Image src={require("../../../public/00098_Moment_e.png").default} alt="topimg" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Top;