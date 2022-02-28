import React from "react";
import Image from "next/image";
import Rating from '@mui/material/Rating';
import { skillCardContents } from "../../api/variable";
import Header from "./header";
import Footer from "./footer";
import "devicon";


const SkillCard = (props) =>{
    return(
        <div className="p-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-200 w-132 h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform">
                <div className="flex justify-center items-center mx-3 my-3">
                    <span className={`${props.contents.image} text-9xl p-1`}></span>
                </div>
                <div className="m-0 p-0 border-t-2"></div>
                <div className="mx-3 my-2">
                    <div className="mx-2">
                        <p className="mx-2 my-3 p-0 text-4xl">{props.contents.title}</p>
                    </div>
                    <div className="mx-5 mt-1 p-0">
                        <Rating 
                            name="read-only" 
                            value={props.contents.stars} 
                            readOnly
                        />
                    </div>
                    <div className="mx-3 my-2 p-0">
                        <p className="mx-2 p-0 text-lg">{props.contents.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Skills = () =>{
    return(
        <>
            <Header />
            <div className="flex justify-center">
                <div className="min-h-screen flex flex-wrap justify-center items-center mx-6 my-5">
                    {skillCardContents.map((contents)=> {
                        return (
                            <SkillCard key={contents.id} contents = {contents} />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Skills;