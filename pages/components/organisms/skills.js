import React from "react";
import Image from "next/image";
import { skillCardContents } from "../../api/variable";
import Header from "./header";
import Footer from "./footer";
import SkillCard from "../modules/skillCard";
import "devicon";


const Skills = () =>{
    return(
        <>
            <Header />
            <div className="flex justify-center">
                <div className="min-h-screen flex flex-wrap justify-center items-center mx-6 my-5">
                    {skillCardContents.map((contents)=> {
                        return (
                            <SkillCard contents = {contents} key={contents.id}/>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Skills;