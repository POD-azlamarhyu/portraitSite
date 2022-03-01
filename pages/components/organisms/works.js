import React from "react";
import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import GitHub from "@mui/icons-material/GitHub";
import "devicon";
import { worksCardContents } from "../../api/variable";
import CardMedia from "@material-ui/core/CardMedia";



const WorksCard = (props) =>{

    const onClickGit = (url) => {
        window.open(url);
    }

    return (
        <div className="p-5">
            <div className="bg-gradient-to-r from-blue-500 to-blue-300 
                            w-140 h-100 m-auto rounded-xl shadow-2xl transform 
                            hover:scale-110 transition-transform">
                    {props.contents.image.src ? (
                        <div className="flex justify-center m-1 p-3 h-64">
                            <img src={props.contents.image.src} alt={`img${props.contents.title}`}/>
                        </div>
                    ):(
                        <div className="flex justify-center items-center m-1 p-2 h-64">
                            <p className="text-6xl text-gray-500">No Image</p>
                        </div>
                    )}
                <div className="m-0 p-0 border-t-2"></div>
                <div className="m-3">
                    <div className="mx-2 my-1 flex">
                        <p className="mx-1 text-4xl">{props.contents.title}</p>
                        <GitHub
                            className="m-2 p-0"
                            onClick={()=> onClickGit(props.contents.repository)}
                        />
                    </div>
                    <div className="mx-2 my-2 p-0">
                        <p className="mx-1 p-0 text-lg">{props.contents.description}</p>
                    </div>
                    <span className="mx-2 my-4 py-2">
                        {props.contents.useTech.map((tech) => {
                            return(
                                <span className={`${tech.mark} text-5xl mx-2 my-3 py-1`} key={tech.id}></span>
                            );
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
}

const Works = () => {
    return(
        <>
            <Header />
                <div className="min-h-screen flex justify-center items-center flex-wrap mx-2">
                    {worksCardContents.map((contents) => {
                        return (
                            <WorksCard contents={contents} key={contents.id}/>
                        );
                    })}
                </div>
            <Footer />
        </>
    );
}

export default Works;