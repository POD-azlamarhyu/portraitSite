import React from "react";
import Header from './header';
import Footer from './footer';
import Image from "next/image";
import { hobbysCardContents } from "../../api/variable";

const HobbysLeftCard = (props) => {
    return (
        <div className="flex w-full h-94 bg-slate-300 mx-2 my-10 rounded-xl transform 
                            hover:scale-110 transition-transform">
            <div className="w-7/12">
                <h2 className="mx-5 my-5 text-4xl font-medium">{props.contents.title}</h2>
                <div className="mx-5 my-7">
                    {props.contents.description.map((desc) => {
                        return (
                            <p className="text-2xl text-slate-600" key={desc.id}>{desc.param}</p>
                        )
                    })}
                </div>
            </div>
            <div className="w-5/12">
                <div className="mx-3 my-3 p-2 flex justify-center items-center">
                    <img src={props.contents.image.src} alt="img"/>
                </div>
            </div>
        </div>
    );
};

const HobbysRightCard = (props) =>{
    return (
        <div className="flex w-full h-94 bg-slate-300 mx-2 my-10 rounded-xl transform 
                            hover:scale-110 transition-transform">
            <div className="w-5/12">
                <div className="mx-3 my-3 p-2 flex justify-center items-center">
                        <img src={props.contents.image.src} alt={`img${props.contents.title}`}/>
                    </div>
                </div>
            <div className="w-7/12">
                <h2 className="mx-5 my-5 text-4xl font-medium">{props.contents.title}</h2>
                <div className="mx-5 my-7">
                    {props.contents.description.map((desc) => {
                        return(
                            <p className="text-2xl text-slate-600" key={desc.id}>{desc.param}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

const Hobbys = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="flex-none w-1/12 m-4">
                    <></>
                </div>
                <div className="flex-1 flex-col w-5/6 m-4">
                    {hobbysCardContents.map((contents)=>{
                        return(
                            contents.id % 2 === 0 ? (
                                <HobbysLeftCard contents={contents} key={contents.id}/>
                            ):(
                                <HobbysRightCard contents={contents} key={contents.id}/>
                            )
                        );
                    })}
                </div>
                <div className="flex-none w-1/12 m-4">
                    <></>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Hobbys;