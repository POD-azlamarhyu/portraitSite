import React from "react";
import Image from "next/image";
import Rating from '@mui/material/Rating';
import { name } from "../../api/variable";
import Header from "./header";
import Footer from "./footer";

const SkillItems = [
    {
        skill:'Java',
    }
]

const Skills = () =>{
    return(
        <>
            <Header />
                <div className="min-h-screen flex justify-center items-center flex-wrap mx-5">
                    <div className="p-4">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-300 
                                        w-96 h-60 m-auto rounded-xl shadow-2xl transform 
                                        hover:scale-110 transition-transform">
                            
                            <div className="flex justify-center p-4">
                                <Image 
                                    className=""
                                    src={require("../../../public/ruby.png")} 
                                    width={100} 
                                    height={100} 
                                    alt="img"
                                />
                            </div>
                            <div className="m-0 p-0 border-t-2"></div>
                            <div className="mx-2">
                                <p className="mx-1 text-2xl">Rails</p>
                            </div>
                            <div className="mx-2 mt-1 p-0">
                                <Rating 
                                    name="read-only" 
                                    value={"2"} 
                                    readOnly
                                />
                            </div>
                            <div className="mx-2 my-2 p-0">
                                <p className="mx-1 p-0">Web開発で勉強中</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}

export default Skills;