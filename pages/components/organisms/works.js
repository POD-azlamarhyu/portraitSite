import React from "react";
import Header from "./header";
import Footer from "./footer";
import WorksCard from "../modules/worksCard";

const Works = () => {

    const worksCardContents = [
        {
            id: 0,
            image: require("../../../public/portrait_e.png").default,
            title: "Portrait Site",
            description: "紹介サイト作成したいと思ったのでNextの練習も兼ねて作成しました．",
            useTech: [
                {
                    id:0,
                    mark: "devicon-javascript-plain colored",
                },
                {
                    id: 1,
                    mark:"devicon-nextjs-plain-wordmark colored", 
                },
                {
                    id:2,
                    mark:"devicon-materialui-plain colored",
                },
                {
                    id:3,
                    mark:"devicon-tailwindcss-plain colored",
                }
            ],
            repository:"https://github.com/POD-azlamarhyu/portraitSite",
        },
        {
            id: 1,
            image: require("../../../public/toweet_e.png").default,
            title: "Django Tweet App",
            description: "twitterのクローンをDjangoの練習も兼ねて作成しました．",
            useTech: [
                {
                    id:0,
                    mark: "devicon-python-plain colored",
                },
                {
                    id: 1,
                    mark:"devicon-django-plain-wordmark colored",
                },
                {
                    id:2,
                    mark:"devicon-javascript-plain colored",
                },
                {
                    id:3,
                    mark:"devicon-bootstrap-plain colored"
                }
            ],
            repository:"https://github.com/POD-azlamarhyu/Twitter_clone_with_Django"
        },
        {
            id: 2,
            image:'',
            title: "Stock data scraiping",
            description: "株のデータを収集するために作成しました．",
            useTech: [
                {
                    id:0,
                    mark: "devicon-python-plain colored",
                },
                {
                    id: 1,
                    mark:"devicon-numpy-original colored"
                }
            ],
            repository: "https://github.com/POD-azlamarhyu/getStockdata",
        },
        {
            id: 3,
            image: require("../../../public/watch_e.png").default,
            title: "JS Web Watch",
            description: "DOMの理解のため，WEB時計を作成しました．",
            useTech: [
                {
                    id:0,
                    mark: "devicon-javascript-plain colored",
                }
                
            ],
            repository: "https://github.com/POD-azlamarhyu/Javascript_light_watch",
        },
        {
            id: 4,
            image: require("../../../public/unity_e.png").default,
            title: "Unity Ball Rolling Game",
            description: "Unityを使った3Ｄコースゲームです．",
            useTech: [
                
                {
                    id:0,
                    mark: "devicon-csharp-plain colored",
                },
                {
                    id: 1,
                    mark:"devicon-unity-original colored"
                },
            ],
            repository: "https://github.com/POD-azlamarhyu/UnityBallrollgame",
        },
    ];
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