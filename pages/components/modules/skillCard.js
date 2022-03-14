import React from "react";
import "devicon";
import Rating from '@mui/material/Rating';

const SkillCard = (props) =>{
    return(
        <div className="p-4">
            <div className={props.contents.color}>
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
    )
};

export default SkillCard;