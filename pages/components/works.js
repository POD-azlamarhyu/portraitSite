import React from "react";
import Header from "./header";
import Footer from "./footer";
import GitHub from "@mui/icons-material/GitHub";
import "devicon";
const NoImage = require("../../public/no_image_logo.png").default;

const worksCardContents = [
    {
        id: 0,
        image: require("../../public/portrait_e.png").default,
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
        image: require("../../public/twitter_clone.png").default,
        title: "Twitter Clone SPA",
        description: "TwitterのクローンをDjangoRF, PostgreSQL, NextJS, Dockerを用いてSPAとして作成．",
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
                mark:"devicon-nextjs-original-wordmark colored",
            },
            {
                id:3,
                mark:"devicon-typescript-plain colored"
            },
            {
                id:4,
                mark:"devicon-materialui-plain colored"
            },
            {
                id:5,
                mark:"devicon-tailwindcss-plain colored",
            },
            {
                id:6,
                mark:'devicon-docker-plain colored',
            },
            {
                id:7,
                mark:'devicon-postgresql-plain colored',
            }
        ],
        repository:"https://github.com/POD-azlamarhyu/Twitter_clone_SPA"
    },
    {
        id: 6,
        image: require("../../public/portrait_e.png").default,
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
    {
        

        id: 2,
        image: require("../../public/toweet_e.png").default,
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
        id: 3,
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
        id: 7,
        image: require("../../public/stockflask.png").default,
        title: "Flask 株価データWebアプリ",
        description: "FlaskにてWeb上で株価データを取得できるアプリです．",
        useTech: [
            
            {
                id:0,
                mark: "devicon-python-plain colored",
            },
            {
                id:1,
                mark: "devicon-flask-original colored",
            },
            {
                id:2,
                mark: "devicon-pandas-original-wordmark",
            },
        ],
        repository: "https://github.com/POD-azlamarhyu/Python_credit_charts",
    },
    {
        id: 4,
        image: require("../../public/watch_e.png").default,
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
        id: 5,
        image: require("../../public/unity_e.png").default,
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
        repository: "https://github.com/POD-azlamarhyu/unity_tutorial_scrollegame",
    },
    {
        id: 6,
        image: '',
        title: "Credit Card レーダーチャート",
        description: "性能評価グラフを作るためのコードです．",
        useTech: [
            
            {
                id:0,
                mark: "devicon-python-plain colored",
            },
        ],
        repository: "https://github.com/POD-azlamarhyu/Python_credit_charts",
    },

];

const WorksCard = (props) =>{


    const onClickGit = (url) => {
        window.open(url);
    }

    return (
        <div className="p-5">
            <div className="bg-gradient-to-r from-purple-500 to-purple-200 w-11/12 md:w-148 md:h-120 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform">
                    {props.contents.image.src ? (
                        <div className="flex justify-center m-1 p-3 h-60">
                            <img src={props.contents.image.src} alt={`img${props.contents.title}`}/>
                        </div>
                    ):(
                        <div className="flex justify-center m-1 p-3 h-60">
                            <img src={NoImage.src} alt="img"/>
                        </div>
                    )}
                <div className="m-0 p-0 border-t-2"></div>
                <div className="m-3">
                    <div className="mx-2 my-1 flex">
                        <p className="mx-1 text-2xl sm:text-4xl">{props.contents.title}</p>
                        <GitHub
                            className="my-1 mx-4 p-0 cursor-pointer"
                            sx={{fontSize:33}}
                            onClick={()=> onClickGit(props.contents.repository)}
                        />
                    </div>
                    <div className="mx-2 my-2 p-0">
                        <p className="mx-1 p-0 text-lg">{props.contents.description}</p>
                    </div>
                    <span className="mx-2 my-3 py-2 flex flex-wrap">
                        {props.contents.useTech.map((tech) => {
                            return(
                                <i className={tech.mark+" text-3xl sm:text-5xl mx-1 my-1 p-1"} key={tech.id}></i>
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