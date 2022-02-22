import React from "react";
import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import GitHub from "@mui/icons-material/GitHub";
import "devicon";

const Works = () =>{
    return(
        <>
            <Header />
                <div className="min-h-screen flex justify-center items-center flex-wrap mx-2">
                    <div className="p-1">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-300 
                                        w-112 h-72 m-auto rounded-xl shadow-2xl transform 
                                        hover:scale-110 transition-transform">
                            <div className="flex justify-center p-1 w-96 h-36">
                                <Image 
                                    className="item-center"
                                    src={require("../../../public/ruby.png")}
                                    alt="img"
                                />
                            </div>
                            <div className="m-0 p-0 border-t-2"></div>
                            <div className="mx-2 mt-1 flex">
                                <p className="text-4xl mx-1">Rails</p>
                                <GitHub 
                                    className="mt-1 ml-5"
                                />
                            </div>
                            <div className="mx-2 my-2 p-0">
                                <p className="mx-1 p-0">Web開発で勉強中</p>
                            </div>
                            <span className="mx-4 my-3 pt-1">
                                <span className="devicon-javascript-plain colored text-4xl"></span>
                            </span>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}

export default Works;