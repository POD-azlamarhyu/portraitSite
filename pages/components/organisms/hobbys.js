import React from "react";
import Header from './header';
import Footer from './footer';
import HobbysLeftCard from "../modules/hobbysLeftCard";
import HobbysRightCard from "../modules/hobbysRightCard";
import { hobbysCardContents } from "../../api/variable";


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
                        )
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