import React from "react";
import Header from "./header";
import Footer from "./footer";
import GitHub from "@mui/icons-material/GitHub";

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
    {
        id: 5,
        image: require("../../../public/portrait_e.png").default,
        title: "Portrait Site TypeScript ver.",
        description: "上記自己紹介サイトのTypeScript版です. ",
        useTech: [
            {
                id:0,
                mark: "devicon-typescript-plain colored",
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
        repository:"https://github.com/POD-azlamarhyu/portraitSite_ts",
    },
];

const WorksCard = (props) =>{


    const onClickGit = (url) => {
        window.open(url);
    }

    return (
        <div className="p-5">
            <div className="bg-gradient-to-r from-blue-500 to-blue-300 w-full
                            md:w-148 h-100 m-auto rounded-xl shadow-2xl transform 
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
};

const Works = () => {

    return(
        <>
            <Header />
                <div className="min-h-screen flex justify-center items-center flex-wrap md:mx-3 mx-1">
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