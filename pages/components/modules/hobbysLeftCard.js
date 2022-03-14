import React from "react";

const HobbysLeftCard = (props) => {
    return (
        <div className="flex w-full h-94 bg-sky-300 mx-2 my-10 rounded-xl transform 
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
                {props.contents.image.src ? (
                    <div className="mx-3 my-3 p-2 flex justify-center items-center">
                        <img src={props.contents.image.src} alt="img"/>
                    </div>
                ):(
                    <div className="flex justify-center items-center m-1 p-2 h-64">
                        <p className="text-6xl text-gray-500">No Image</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HobbysLeftCard;