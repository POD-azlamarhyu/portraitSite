import React from "react";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import "devicon";
import Rating from '@mui/material/Rating';


const skillCardCol = {
    red:`bg-gradient-to-r from-fuchsia-500 to-fuchsia-200 w-full md:w-132 md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`,
    blue:`bg-gradient-to-r from-blue-500 to-blue-200 md:w-132 w-full md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`,
    indigo:`bg-gradient-to-r from-indigo-500 to-indigo-200 w-full md:w-132 md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`,
    green:`bg-gradient-to-r from-gray-500 to-gray-200 w-full md:w-132 md:h-80 m-auto rounded-xl shadow-2xl transform hover:scale-110 transition-transform`
}
const skillCardContents = [
    {
        id: 0,
        image: "devicon-python-plain colored",
        title: "Python 3",
        stars: 4,
        description: "最も触れている言語の一つです．",
        color: skillCardCol.blue,
    },
    {
        id: 1,
        image: "devicon-c-plain colored",
        title: "C lang",
        stars: 1,
        description: "ポインターでメモリ管理の勉強を行うため，使ってました．",
        color: skillCardCol.blue,
    },
    {
        id: 2,
        image: "devicon-csharp-plain colored",
        title: "C#",
        stars: 2,
        description: "主にWindows開発とUnityでのゲーム開発で使っています．FPS作りたい．",
        color: skillCardCol.blue,
    },
    {
        id: 3,
        image: "devicon-javascript-plain colored",
        title: "JavaScript",
        stars: 4,
        description: "フロントエンドの開発で主に使っています．",
        color: skillCardCol.red,
    },
    {
        id: 4,
        image: "devicon-typescript-plain colored",
        title: "TypeScript",
        stars: 3,
        description: "JSと並行して型付になれるため勉強していきます．",
        color: skillCardCol.red,
    },
    {
        id: 5,
        image: "devicon-java-plain colored",
        title: "Java",
        stars: 2,
        description: "主に研究でのAndroid開発に使っています．",
        color: skillCardCol.blue,
    },
    {
        id:6,
        image: "devicon-ruby-plain colored",
        title: "Ruby",
        stars: 3,
        description: "大学の授業のほか，サーバサイド言語の習得のため学んでいます．",
        color: skillCardCol.blue,
    },

    {
        id: 7,
        image: "devicon-android-plain colored",
        title: "Android",
        stars: 2,
        description: "研究のほか，個人開発でアプリの方面も触っています．",
        color: skillCardCol.green,
    },
    {
        id: 8,
        image: "devicon-react-original colored",
        title: "React JS",
        stars: 4,
        description: "フレームワークの中で最も触っています．",
        color: skillCardCol.green
    },
    {
        id: 9,
        image: "devicon-nextjs-plain-wordmark colored",
        title: "Next JS",
        stars: 4,
        description: "フレームワークの中で最も触っています．SSGやSSRをするためにやっています．",
        color: skillCardCol.green,
    },
    {
        id: 10,
        image: "devicon-django-plain-wordmark colored",
        title: "Django",
        stars: 4,
        description: "サーバサイドのフレームワークとして使っています．Pythonが最もなれているのでこれを選びました．",
        color: skillCardCol.green,
    },
    {
        id:11,
        image: "devicon-rails-plain colored",
        title: "Ruby on Rails",
        stars: 1,
        description: "日本はRailsが実務で使われていることが多いので勉強しています．",
        color :skillCardCol.green,
    },
    {
        id: 12,
        image: "devicon-unity-original colored",
        title: "Unity",
        stars: 2,
        description: "ゲームエンジンとして使っています．",
        color: skillCardCol.green,
    },
    {
        id:13,
        image: "devicon-postgresql-plain colored",
        title: "PostgreSQL",
        stars: 4,
        description: "データベースでOSSなので使っています．SQLは実務でかなり鍛えられました．",
        color: skillCardCol.indigo,
    },
    {
        id: 14,
        image: "devicon-git-plain colored",
        title: "Git",
        stars: 4,
        description: "ソースコード管理に使ってます．",
        color: skillCardCol.indigo,
    },
    {
        id:15,
        image: "devicon-github-original colored",
        title: "GitHub",
        stars: 4,
        description: "Gitのウェブサービスとして使ってます．",
        color: skillCardCol.indigo,
    },
    {
        id:16,
        image: "devicon-tensorflow-original colored",
        title: "Tensorflow",
        stars: 3,
        description: "機械学習で使っています．",
        color: skillCardCol.blue,
    },
    {
        id:17,
        image: "devicon-tailwindcss-plain colored",
        title: "Tailwind CSS",
        stars: 4,
        description: "フロントエンドで重宝しています．かなりの頻度で使っていますので結構覚えました．",
        color: skillCardCol.red,
    },
    {
        id:18,
        image: "devicon-bulma-plain colored",
        title: "Bulma",
        stars: 2,
        description: "フロントエンドでサブのCSSフレームワークとして使ってます．最近はあまり使ってません．",
        color: skillCardCol.red,
    },
    {
        id:19,
        image: "devicon-sass-original colored",
        title: "SASS (SCSS)",
        stars: 2,
        description: "CSSをより効率的に書くために使ってます．",
        color: skillCardCol.red,
    },
];

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

const Skills = () =>{
    return(
        <>
            <Header />
            <div className="flex justify-center">
                <div className="min-h-screen flex flex-wrap justify-center items-center mx-3 my-3 md:mx-6 md:my-5">
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